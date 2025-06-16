import React, { useState } from 'react';
import { Plus, Trash2, Star, Bug, FileText, Download, Camera } from 'lucide-react';
import html2canvas from 'html2canvas';
import './index.css';

interface Feature {
  id: string;
  featureNumber: string;
  title: string;
  description: string;
  imageUrl: string;
  gains: string;
  notes: string;
  finalImagePath?: string;
}

interface BugFix {
  id: string;
  tfsId: string;
  title: string;
  description: string;
}

interface TranslatedContent {
  features: { [key: string]: { title: string; description: string; gains: string; notes: string } };
  bugFixes: { [key: string]: { title: string; description: string } };
  headers: {
    newFeatures: string;
    bugFixes: string;
    releaseTitle: string;
    gains: string;
    notes: string;
  };
}

function App() {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [bugFixes, setBugFixes] = useState<BugFix[]>([]);
  const [releaseDate, setReleaseDate] = useState(new Date().toISOString().split('T')[0]);
  const [showSpanishTranslation, setShowSpanishTranslation] = useState(false);
  const [translatedContent, setTranslatedContent] = useState<TranslatedContent | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);

  const addFeature = () => {
    const newFeature: Feature = {
      id: Date.now().toString(),
      featureNumber: '',
      title: '',
      description: '',
      imageUrl: '',
      gains: '',
      notes: '',
      finalImagePath: ''
    };
    setFeatures([...features, newFeature]);
  };

  const removeFeature = (id: string) => {
    setFeatures(features.filter(feature => feature.id !== id));
  };

  const updateFeature = (id: string, field: keyof Feature, value: string) => {
    setFeatures(prevFeatures => 
      prevFeatures.map(feature => 
        feature.id === id ? { ...feature, [field]: value } : feature
      )
    );
  };

  // Função para comprimir imagem se necessário
  const compressImage = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        // Definir tamanhos máximos
        const MAX_WIDTH = 1200;
        const MAX_HEIGHT = 800;
        const MAX_FILE_SIZE = 500 * 1024; // 500KB
        
        let { width, height } = img;
        
        // Redimensionar se necessário
        if (width > MAX_WIDTH || height > MAX_HEIGHT) {
          const ratio = Math.min(MAX_WIDTH / width, MAX_HEIGHT / height);
          width *= ratio;
          height *= ratio;
        }
        
        canvas.width = width;
        canvas.height = height;
        
        // Desenhar imagem redimensionada
        ctx?.drawImage(img, 0, 0, width, height);
        
        // Determinar qualidade baseada no tamanho do arquivo original
        let quality = 0.8;
        if (file.size > MAX_FILE_SIZE * 2) {
          quality = 0.6;
        } else if (file.size > MAX_FILE_SIZE) {
          quality = 0.7;
        }
        
        // Converter para base64 com compressão
        const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(compressedDataUrl);
      };
      
      img.onerror = () => reject(new Error('Erro ao carregar imagem'));
      img.src = URL.createObjectURL(file);
    });
  };

  // Função para capturar imagem do email com alta resolução e otimização
  const captureEmailImage = async () => {
    try {
      let finalCanvas: HTMLCanvasElement;
      
      if (showSpanishTranslation && translatedContent) {
        // Capturar ambas as versões quando tradução estiver ativada
        const emailPreview = document.getElementById('email-preview');
        const spanishPreview = document.querySelector('.spanish-preview') as HTMLElement;
        
        if (!emailPreview || !spanishPreview) {
          alert('Erro: Não foi possível encontrar os previews do email');
          return;
        }

        // Capturar versão em português
        const portugueseCanvas = await html2canvas(emailPreview, {
          useCORS: true,
          allowTaint: true,
          background: '#ffffff'
        });
        
        // Capturar versão em espanhol
        const spanishCanvas = await html2canvas(spanishPreview, {
          useCORS: true,
          allowTaint: true,
          background: '#ffffff'
        });
        
        // Criar canvas combinado
        const combinedCanvas = document.createElement('canvas');
        const ctx = combinedCanvas.getContext('2d');
        const gap = 40; // Espaço entre as versões
        
        combinedCanvas.width = Math.max(portugueseCanvas.width, spanishCanvas.width);
        combinedCanvas.height = portugueseCanvas.height + spanishCanvas.height + gap;
        
        if (ctx) {
          // Fundo branco
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, combinedCanvas.width, combinedCanvas.height);
          
          // Desenhar versão portuguesa
          ctx.drawImage(portugueseCanvas, 0, 0);
          
          // Desenhar versão espanhola
          ctx.drawImage(spanishCanvas, 0, portugueseCanvas.height + gap);
        }
        
        finalCanvas = combinedCanvas;
      } else {
        // Capturar apenas versão portuguesa
        const emailPreview = document.getElementById('email-preview');
        if (!emailPreview) {
          alert('Erro: Não foi possível encontrar o preview do email');
          return;
        }

        finalCanvas = await html2canvas(emailPreview, {
          useCORS: true,
          allowTaint: true,
          background: '#ffffff'
        });
      }
      
      // Criar canvas com resolução ainda maior para máxima qualidade
      const highResCanvas = document.createElement('canvas');
      const ctx = highResCanvas.getContext('2d');
      const scaleFactor = 3; // Fator de escala para alta resolução
      
      highResCanvas.width = finalCanvas.width * scaleFactor;
      highResCanvas.height = finalCanvas.height * scaleFactor;
      
      if (ctx) {
        // Configurações de alta qualidade para renderização
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(finalCanvas, 0, 0, highResCanvas.width, highResCanvas.height);
      }

      // Função para comprimir imagem de forma inteligente
      const compressImage = (canvas: HTMLCanvasElement): Promise<Blob> => {
        return new Promise((resolve) => {
          // Calcular tamanho estimado da imagem
          const estimatedSize = (canvas.width * canvas.height * 4) / 1024; // KB aproximado
          
          let format = 'image/jpeg';
          let quality = 0.9;
          
          // Para imagens com duas traduções, usar compressão mais agressiva
          if (showSpanishTranslation && translatedContent) {
            quality = 0.75; // Compressão mais forte para imagens duplas
            if (estimatedSize > 8000) { // > 8MB
              quality = 0.6;
            } else if (estimatedSize > 5000) { // > 5MB
              quality = 0.65;
            } else if (estimatedSize > 3000) { // > 3MB
              quality = 0.7;
            }
          } else {
            // Ajustar qualidade baseado no tamanho estimado para imagem única
            if (estimatedSize > 5000) { // > 5MB
              quality = 0.7;
            } else if (estimatedSize > 2000) { // > 2MB
              quality = 0.8;
            } else if (estimatedSize > 1000) { // > 1MB
              quality = 0.85;
            }
          }
          
          // Sempre usar JPEG para garantir consistência e menor tamanho
          canvas.toBlob((blob) => {
            if (blob) {
              resolve(blob);
            } else {
              // Fallback com qualidade ainda menor se necessário
              canvas.toBlob((fallbackBlob) => {
                resolve(fallbackBlob!);
              }, 'image/jpeg', 0.5);
            }
          }, format, quality);
        });
      };

      // Aplicar compressão inteligente
      const compressedBlob = await compressImage(highResCanvas);
      
      // Download da imagem otimizada
      const url = URL.createObjectURL(compressedBlob);
      const link = document.createElement('a');
      link.href = url;
      // Sempre usar .jpg para garantir consistência
      const fileExtension = 'jpg';
      const fileName = showSpanishTranslation && translatedContent 
        ? `email-release-pt-es-${new Date().toISOString().split('T')[0]}.${fileExtension}`
        : `email-release-${new Date().toISOString().split('T')[0]}.${fileExtension}`;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      // Log de informações para debug
      const versionInfo = showSpanishTranslation && translatedContent ? 'Português + Espanhol' : 'Português';
      console.log(`Imagem capturada (${versionInfo}): ${(compressedBlob.size / 1024 / 1024).toFixed(2)}MB, Resolução: ${highResCanvas.width}x${highResCanvas.height}`);
      
    } catch (error) {
      console.error('Erro ao capturar imagem:', error);
      alert('Erro ao gerar imagem do email. Tente novamente.');
    }
  };

  const addBugFix = () => {
    const newBugFix: BugFix = {
      id: Date.now().toString(),
      tfsId: '',
      title: '',
      description: ''
    };
    setBugFixes([...bugFixes, newBugFix]);
  };

  const removeBugFix = (id: string) => {
    setBugFixes(bugFixes.filter(bugFix => bugFix.id !== id));
  };

  const updateBugFix = (id: string, field: keyof BugFix, value: string) => {
    setBugFixes(bugFixes.map(bugFix => 
      bugFix.id === id ? { ...bugFix, [field]: value } : bugFix
    ));
  };

  // Função para traduzir texto usando API gratuita
  const translateText = async (text: string): Promise<string> => {
    if (!text.trim()) return text;
    
    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=pt|es`
      );
      const data = await response.json();
      return data.responseData?.translatedText || text;
    } catch (error) {
      console.warn('Erro na tradução:', error);
      return text;
    }
  };

  // Função para traduzir todo o conteúdo
  const translateContent = async () => {
    if (isTranslating) return;
    
    setIsTranslating(true);
    try {
      const translated: TranslatedContent = {
        features: {},
        bugFixes: {},
        headers: {
          newFeatures: await translateText('Novas Funcionalidades'),
          bugFixes: await translateText('Correções de Bugs'),
          releaseTitle: await translateText('Comunicado Release BeeDirect'),
          gains: await translateText('Ganhos'),
          notes: await translateText('Observações')
        }
      };

      // Traduzir features
      for (const feature of features) {
        if (feature.title || feature.description || feature.gains || feature.notes) {
          translated.features[feature.id] = {
            title: await translateText(feature.title),
            description: await translateText(feature.description),
            gains: await translateText(feature.gains),
            notes: await translateText(feature.notes)
          };
        }
      }

      // Traduzir bug fixes
      for (const bugFix of bugFixes) {
        if (bugFix.title || bugFix.description) {
          translated.bugFixes[bugFix.id] = {
            title: await translateText(bugFix.title),
            description: await translateText(bugFix.description)
          };
        }
      }

      setTranslatedContent(translated);
    } catch (error) {
      console.error('Erro ao traduzir conteúdo:', error);
      alert('Erro ao traduzir conteúdo. Tente novamente.');
    } finally {
      setIsTranslating(false);
    }
  };

  // Função para ativar/desativar tradução
  const toggleSpanishTranslation = async () => {
    if (!showSpanishTranslation && !translatedContent) {
      await translateContent();
    }
    setShowSpanishTranslation(!showSpanishTranslation);
  };

  const generateEmailHTML = async () => {
    // Converter logo para base64
    let logoBase64 = '';
    try {
      const response = await fetch('/images/omnibees_logo_black.png');
      const blob = await response.blob();
      const reader = new FileReader();
      logoBase64 = await new Promise((resolve) => {
        reader.onload = () => {
          const result = reader.result as string;
          resolve(result.split(',')[1]); // Remove o prefixo data:image/png;base64,
        };
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error('Erro ao carregar logo:', error);
      logoBase64 = ''; // Fallback vazio
    }

    // Converter imagem de release para base64
    let releaseImageBase64 = '';
    try {
      const response = await fetch('/images/image003.png');
      const blob = await response.blob();
      const reader = new FileReader();
      releaseImageBase64 = await new Promise((resolve) => {
        reader.onload = () => {
          const result = reader.result as string;
          resolve(result.split(',')[1]);
        };
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error('Erro ao carregar imagem de release:', error);
      releaseImageBase64 = '';
    }

    const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BeeDirect Release Notes</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #F5F5F5;
        }
        .email-container {
            background: #FFFFFF;
            border-radius: 12px;
            padding: 32px;
            box-shadow: 0 4px 12px rgba(0, 47, 108, 0.15);
        }
        .logo-container {
            text-align: center;
            margin-bottom: 32px;
            padding-bottom: 24px;
            border-bottom: 2px solid #F5F5F5;
        }
        .logo {
            max-width: 200px;
            height: auto;
        }
        .section {
            margin-bottom: 32px;
        }
        .section h2 {
            color: #002F6C;
            font-size: 1.4rem;
            margin-bottom: 16px;
            text-align: left !important;
            direction: ltr !important;
        }
        .section h2 svg {
            display: inline-block;
            vertical-align: middle;
            margin-right: 8px;
        }
        .feature-item, .bug-item {
            background: #F5F5F5;
            border-left: 4px solid #FFD100;
            padding: 16px;
            margin-bottom: 16px;
            border-radius: 0 8px 8px 0;
        }
        .feature-item h3, .bug-item h3 {
            color: #002F6C;
            margin-bottom: 8px;
            font-size: 1.1rem;
        }
        .feature-image {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin: 12px 0;
        }
        .notes {
            background: rgba(255, 209, 0, 0.1);
            border: 1px solid #FFD100;
            border-radius: 6px;
            padding: 12px;
            margin-top: 8px;
            font-size: 0.9rem;
            color: #002F6C;
        }
        .release-notes-link {
            background: #FFD100;
            color: #002F6C;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 8px;
            display: inline-block;
            font-weight: 500;
            margin-top: 16px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="logo-container">
            <img src="data:image/png;base64,${logoBase64}" alt="BeeDirect Logo" class="logo">
        </div>
        
        <div style="display: flex; align-items: center; margin-bottom: 24px; gap: 20px; padding: 0 20px;">
            <img src="data:image/png;base64,${releaseImageBase64}" alt="Release Image" style="width: 150px; height: auto; object-fit: contain;">
            <div>
                <h2 style="margin: 0; color: #002F6C; font-size: 1.5rem;">Comunicado Release BeeDirect</h2>
                <p style="margin: 4px 0 0 0; color: #666; font-size: 1rem;">${new Date(releaseDate + 'T00:00:00').toLocaleDateString('pt-BR')}</p>
            </div>
        </div>
        
        ${features.length > 0 ? `
        <div class="section">
            <h2>Novas Funcionalidades</h2>
            ${features.map(feature => `
            <div class="feature-item">
                ${feature.featureNumber ? `<span style="display: inline-block; background-color: #002F6C; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: bold; margin-bottom: 8px;">${feature.featureNumber}</span><br>` : ''}
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
                ${feature.imageUrl ? `<img src="${feature.imageUrl}" alt="${feature.title}" class="feature-image">` : ''}
                ${feature.notes ? `<div class="notes"><strong>Notas:</strong> ${feature.notes}</div>` : ''}
            </div>
            `).join('')}
        </div>
        ` : ''}
        
        ${bugFixes.length > 0 ? `
        <div class="section">
            <h2>Correções de Bugs</h2>
            ${bugFixes.map(bugFix => `
            <div class="bug-item">
                ${bugFix.tfsId ? `<span style="display: inline-block; background-color: #dc2626; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: bold; margin-bottom: 8px;">${bugFix.tfsId}</span><br>` : ''}
                <h3>${bugFix.title}</h3>
                <p>${bugFix.description}</p>
            </div>
            `).join('')}
        </div>
        ` : ''}
        

    </div>
</body>
</html>
    `;
    
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'beedirect-release-email.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const generateOutlookTemplate = async () => {
    // Converter logo para base64
    let logoBase64 = '';
    let logoContentType = 'image/png';
    try {
      const response = await fetch('/images/omnibees_logo_black.png');
      const blob = await response.blob();
      logoContentType = blob.type;
      const reader = new FileReader();
      logoBase64 = await new Promise((resolve) => {
        reader.onload = () => {
          const result = reader.result as string;
          resolve(result.split(',')[1]);
        };
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error('Erro ao carregar logo:', error);
      logoBase64 = '';
    }

    // Converter imagem de release para base64
    let releaseImageBase64 = '';
    let releaseImageContentType = 'image/png';
    try {
      const response = await fetch('/images/image003.png');
      const blob = await response.blob();
      releaseImageContentType = blob.type;
      const reader = new FileReader();
      releaseImageBase64 = await new Promise((resolve) => {
        reader.onload = () => {
          const result = reader.result as string;
          resolve(result.split(',')[1]);
        };
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error('Erro ao carregar imagem de release:', error);
      releaseImageBase64 = '';
    }

    // Gerar conteúdo HTML para o Outlook com CID para imagens
    const htmlContent = `
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #F5F5F5;
        }
        .email-container {
            background: #FFFFFF;
            border-radius: 12px;
            padding: 32px;
            box-shadow: 0 4px 12px rgba(0, 47, 108, 0.15);
        }
        .logo-container {
            text-align: center;
            margin-bottom: 32px;
            padding-bottom: 24px;
            border-bottom: 2px solid #F5F5F5;
        }
        .logo {
            max-width: 200px;
            height: auto;
        }
        .section {
            margin-bottom: 32px;
        }
        .section h2 {
            color: #002F6C;
            font-size: 1.4rem;
            margin-bottom: 16px;
            text-align: left !important;
            direction: ltr !important;
        }
        .section h2 svg {
            display: inline-block;
            vertical-align: middle;
            margin-right: 8px;
        }
        .feature-item, .bug-item {
            background: #F5F5F5;
            border-left: 4px solid #FFD100;
            padding: 16px;
            margin-bottom: 16px;
            border-radius: 0 8px 8px 0;
        }
        .feature-item h3, .bug-item h3 {
            color: #002F6C;
            margin-bottom: 8px;
            font-size: 1.1rem;
        }
        .feature-image {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin: 12px 0;
        }
        .notes {
            background: rgba(255, 209, 0, 0.1);
            border: 1px solid #FFD100;
            border-radius: 6px;
            padding: 12px;
            margin-top: 8px;
            font-size: 0.9rem;
            color: #002F6C;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="logo-container">
            <img src="cid:logo" alt="BeeDirect Logo" class="logo">
        </div>
        
        <div style="display: flex; align-items: center; margin-bottom: 24px; gap: 20px; padding: 0 20px;">
            <img src="cid:release-image" alt="Release Image" style="width: 150px; height: auto; object-fit: contain;">
            <div>
                <h2 style="margin: 0; color: #002F6C; font-size: 1.5rem;">Comunicado Release BeeDirect</h2>
                <p style="margin: 4px 0 0 0; color: #666; font-size: 1rem;">${new Date(releaseDate + 'T00:00:00').toLocaleDateString('pt-BR')}</p>
            </div>
        </div>
        
        ${features.length > 0 ? `
        <div class="section">
            <h2>Novas Funcionalidades</h2>
            ${features.map(feature => `
            <div class="feature-item">
                ${feature.featureNumber ? `<span style="display: inline-block; background-color: #002F6C; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: bold; margin-bottom: 8px;">${feature.featureNumber}</span><br>` : ''}
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
                ${feature.imageUrl && feature.imageUrl.startsWith('data:') ? `<img src="${feature.imageUrl}" alt="${feature.title}" class="feature-image">` : ''}
                ${feature.gains ? `<div style="background: rgba(34, 197, 94, 0.1); border: 1px solid #22c55e; border-radius: 6px; padding: 12px; margin-top: 8px; font-size: 0.9rem; color: #15803d;"><strong>Ganhos:</strong> ${feature.gains}</div>` : ''}
                ${feature.notes ? `<div class="notes"><strong>📝 Observações:</strong> ${feature.notes}</div>` : ''}
            </div>
            `).join('')}
        </div>
        ` : ''}
        
        ${bugFixes.length > 0 ? `
        <div class="section">
            <h2>Correções de Bugs</h2>
            ${bugFixes.map(bugFix => `
            <div class="bug-item">
                ${bugFix.tfsId ? `<span style="display: inline-block; background-color: #dc2626; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: bold; margin-bottom: 8px;">${bugFix.tfsId}</span><br>` : ''}
                <h3>${bugFix.title}</h3>
                <p>${bugFix.description}</p>
            </div>
            `).join('')}
        </div>
        ` : ''}
    </div>
</body>
</html>`;

    // Criar estrutura EML completa com anexos de imagem usando CID
    const boundary = `----=_NextPart_${Date.now()}`;
    const subject = `BeeDirect Release Notes - ${new Date(releaseDate + 'T00:00:00').toLocaleDateString('pt-BR')}`;
    
    let emlContent = `Subject: ${subject}\r\n`;
    emlContent += `MIME-Version: 1.0\r\n`;
    emlContent += `Content-Type: multipart/related; boundary="${boundary}"\r\n\r\n`;
    
    // Parte HTML
    emlContent += `--${boundary}\r\n`;
    emlContent += `Content-Type: text/html; charset=utf-8\r\n`;
    emlContent += `Content-Transfer-Encoding: quoted-printable\r\n\r\n`;
    emlContent += htmlContent.replace(/=/g, '=3D') + '\r\n\r\n';
    
    // Anexar logo como CID
    if (logoBase64) {
      emlContent += `--${boundary}\r\n`;
      emlContent += `Content-Type: ${logoContentType}\r\n`;
      emlContent += `Content-Transfer-Encoding: base64\r\n`;
      emlContent += `Content-ID: <logo>\r\n\r\n`;
      emlContent += logoBase64 + '\r\n\r\n';
    }
    
    // Anexar imagem de release como CID
    if (releaseImageBase64) {
      emlContent += `--${boundary}\r\n`;
      emlContent += `Content-Type: ${releaseImageContentType}\r\n`;
      emlContent += `Content-Transfer-Encoding: base64\r\n`;
      emlContent += `Content-ID: <release-image>\r\n\r\n`;
      emlContent += releaseImageBase64 + '\r\n\r\n';
    }
    
    emlContent += `--${boundary}--\r\n`;
    
    const blob = new Blob([emlContent], { type: 'message/rfc822' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'beedirect-release-template.eml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container">
      <div className="card">
        <h1 style={{ textAlign: 'center', color: '#002F6C', marginBottom: '8px' }}>
          Gerador de Email de Release
        </h1>
        <p style={{ textAlign: 'center', color: '#333333', marginBottom: '16px' }}>
          BeeDirect - Omnibees
        </p>
        
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <img 
            src="/images/omnibees_logo_black.png" 
            alt="BeeDirect Logo" 
            className="logo"
            style={{ marginBottom: '24px', paddingRight: '10px' }}
          />
          
          <img 
            src="/images/image003.png" 
            alt="Release Image" 
            style={{ width: '150px', height: 'auto', objectFit: 'contain', marginBottom: '16px' }}
          />
          
          <div style={{ paddingBottom: '24px', borderBottom: '2px solid #F5F5F5' }}>
            <h2 style={{ margin: '0', color: '#002F6C', fontSize: '1.5rem' }}>
              Comunicado Release BeeDirect
            </h2>
            <p style={{ margin: '4px 0 0 0', color: '#666', fontSize: '1rem' }}>
              {new Date(releaseDate + 'T00:00:00').toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>
        
        {/* Data Section */}
        <div className="form-group" style={{ marginTop: '16px' }}>
          <label className="form-label">Data do Release</label>
          <input
            type="date"
            className="form-input"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="card">
        <div className="section-header">
          <Star className="text-yellow-500" size={24} />
          <h2 className="section-title">Novas Funcionalidades</h2>
        </div>
        
        {features.map((feature, index) => (
          <div key={feature.id} className="feature-item">
            <div className="item-header">
              <div className="item-number">{index + 1}</div>
              <button 
                onClick={() => removeFeature(feature.id)}
                className="remove-btn"
                title="Remover feature"
              >
                <Trash2 size={16} />
              </button>
            </div>
            
            <div className="form-group">
              <label className="form-label">Número da Feature</label>
              <input
                type="text"
                className="form-input"
                value={feature.featureNumber}
                onChange={(e) => updateFeature(feature.id, 'featureNumber', e.target.value)}
                placeholder="Ex: Feature O-1201"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Título da Feature</label>
              <input
                type="text"
                className="form-input"
                value={feature.title}
                onChange={(e) => updateFeature(feature.id, 'title', e.target.value)}
                placeholder="Ex: Nova funcionalidade de relatórios avançados"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Descrição</label>
              <textarea
                className="form-input form-textarea"
                value={feature.description}
                onChange={(e) => updateFeature(feature.id, 'description', e.target.value)}
                placeholder="Descreva a funcionalidade e seus benefícios..."
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Imagem da Feature</label>
              <input
                type="text"
                className="form-input"
                value={feature.imageUrl}
                onChange={(e) => updateFeature(feature.id, 'imageUrl', e.target.value)}
                placeholder="Ex: /images/feature.png | https://exemplo.com/imagem.png | deixe vazio"
              />
              <div className="file-upload-container">
                <input
                  type="file"
                  accept="image/*"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      if (file.type.startsWith('image/')) {
                        try {
                          // Comprimir imagem se necessário
                          const compressedDataUrl = await compressImage(file);
                          
                          // Calcular tamanho da imagem comprimida
                          const originalSize = (file.size / 1024).toFixed(1);
                          const compressedSize = ((compressedDataUrl.length * 0.75) / 1024).toFixed(1);
                          
                          // Força atualização em uma única operação
                          setFeatures(prevFeatures => 
                            prevFeatures.map(f => 
                              f.id === feature.id 
                                ? { ...f, imageUrl: compressedDataUrl, finalImagePath: `/images/${file.name}` }
                                : f
                            )
                          );
                          
                          // Imagem carregada com sucesso
                        } catch (error) {
                          console.error('Erro ao processar imagem:', error);
                        }
                      } else {
                        console.warn('Arquivo selecionado não é uma imagem.');
                      }
                      // Reset input
                      e.target.value = '';
                    }
                  }}
                  ref={(input) => {
                    if (input) {
                      (window as any)[`fileInput_${feature.id}`] = input;
                    }
                  }}
                  style={{ display: 'none' }}
                />
                <button
                  type="button"
                  onClick={() => {
                    const input = (window as any)[`fileInput_${feature.id}`];
                    if (input) {
                      input.click();
                    }
                  }}
                  className="btn btn-file"
                >
                  📤 Upload
                </button>
              </div>
              <div 
                className="drag-drop-zone"
                onDragOver={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  (e.target as HTMLElement).classList.add('drag-over');
                }}
                onDragLeave={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  (e.target as HTMLElement).classList.remove('drag-over');
                }}
                onDrop={async (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  (e.target as HTMLElement).classList.remove('drag-over');
                  
                  const files = e.dataTransfer?.files;
                  if (files && files.length > 0) {
                    const file = files[0];
                    if (file.type.startsWith('image/')) {
                      try {
                        // Comprimir imagem se necessário
                        const compressedDataUrl = await compressImage(file);
                        
                        // Calcular tamanho da imagem comprimida
                        const originalSize = (file.size / 1024).toFixed(1);
                        const compressedSize = ((compressedDataUrl.length * 0.75) / 1024).toFixed(1);
                        
                        // Força atualização em uma única operação
                        setFeatures(prevFeatures => 
                          prevFeatures.map(f => 
                            f.id === feature.id 
                              ? { ...f, imageUrl: compressedDataUrl, finalImagePath: `/images/${file.name}` }
                              : f
                          )
                        );
                        
                        // Imagem arrastada com sucesso
                      } catch (error) {
                        console.error('Erro ao processar imagem:', error);
                      }
                    } else {
                      console.warn('Arquivo arrastado não é uma imagem.');
                    }
                  }
                }}
              >
                🖼️ Arraste uma imagem aqui
              </div>
              {feature.imageUrl && (
                <div className="image-preview-container">
                  <img 
                    src={feature.imageUrl} 
                    alt="Preview" 
                    className="image-preview"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      updateFeature(feature.id, 'imageUrl', '');
                      updateFeature(feature.id, 'finalImagePath', '');
                    }}
                    className="btn-remove-image"
                  >
                    ❌
                  </button>
                </div>
              )}
              <small className="form-help">
                💡 <strong>3 Opções:</strong> 1) Digite caminho, 2) Clique "Upload", 3) Arraste imagem
              </small>
            </div>
            
            <div className="form-group">
              <label className="form-label">Ganhos (opcional)</label>
              <textarea
                className="form-input form-textarea"
                value={feature.gains}
                onChange={(e) => updateFeature(feature.id, 'gains', e.target.value)}
                placeholder="Descreva os ganhos e benefícios que esta funcionalidade traz..."
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Notas Adicionais (opcional)</label>
              <textarea
                className="form-input form-textarea"
                value={feature.notes}
                onChange={(e) => updateFeature(feature.id, 'notes', e.target.value)}
                placeholder="Impacto, rollout, métricas, etc..."
              />
            </div>
          </div>
        ))}
        
        <button onClick={addFeature} className="btn btn-secondary">
          <Plus size={16} />
          Adicionar Feature
        </button>
      </div>

      {/* Bug Fixes Section */}
      <div className="card">
        <div className="section-header">
          <Bug className="text-red-500" size={24} />
          <h2 className="section-title">Correções de Bugs</h2>
        </div>
        
        {bugFixes.map((bugFix, index) => (
          <div key={bugFix.id} className="bug-item">
            <div className="item-header">
              <div className="item-number">{index + 1}</div>
              <button 
                onClick={() => removeBugFix(bugFix.id)}
                className="remove-btn"
                title="Remover correção"
              >
                <Trash2 size={16} />
              </button>
            </div>
            
            <div className="form-group">
              <label className="form-label">TFS ID / Salesforce ID</label>
              <input
                type="text"
                className="form-input"
                value={bugFix.tfsId}
                onChange={(e) => updateBugFix(bugFix.id, 'tfsId', e.target.value)}
                placeholder="Ex: TFS-12345, SF-67890, etc."
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Título do Bug</label>
              <input
                type="text"
                className="form-input"
                value={bugFix.title}
                onChange={(e) => updateBugFix(bugFix.id, 'title', e.target.value)}
                placeholder="Ex: Correção no cálculo de comissões"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Descrição da Correção</label>
              <textarea
                className="form-input form-textarea"
                value={bugFix.description}
                onChange={(e) => updateBugFix(bugFix.id, 'description', e.target.value)}
                placeholder="Descreva o problema que foi corrigido..."
              />
            </div>
          </div>
        ))}
        
        <button onClick={addBugFix} className="btn btn-secondary">
          <Plus size={16} />
          Adicionar Correção
        </button>
      </div>



      {/* Preview Section */}
      <div className="preview-section">
        <div className="section-header">
          <h2 className="section-title">Preview do Email</h2>
          <div className="translation-toggle">
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={showSpanishTranslation}
                onChange={toggleSpanishTranslation}
                disabled={isTranslating}
              />
              <span className="toggle-slider"></span>
              {isTranslating ? 'Traduzindo...' : 'Incluir versão em Espanhol'}
            </label>
          </div>
        </div>
        
        {/* Preview em Português */}
        <div className="email-preview" id="email-preview">
          <div className="language-header">
            <h3 style={{ color: '#002F6C', margin: '0 0 16px 0', fontSize: '1.2rem', borderBottom: '2px solid #002F6C', paddingBottom: '8px' }}>
              Versão em Português
            </h3>
          </div>
          
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <img 
              src="/images/omnibees_logo_black.png" 
              alt="BeeDirect Logo" 
              className="logo"
              style={{ marginBottom: '24px', paddingRight: '10px' }}
            />
            
            <img 
              src="/images/image003.png" 
              alt="Release Image" 
              style={{ width: '150px', height: 'auto', objectFit: 'contain', marginBottom: '16px' }}
            />
            
            <div style={{ paddingBottom: '24px', borderBottom: '2px solid #F5F5F5' }}>
              <h2 style={{ margin: '0', color: '#002F6C', fontSize: '1.5rem' }}>
                Comunicado Release BeeDirect
              </h2>
              <p style={{ margin: '4px 0 0 0', color: '#666', fontSize: '1rem' }}>
                {new Date(releaseDate + 'T00:00:00').toLocaleDateString('pt-BR')}
              </p>
            </div>
          </div>
          
          {features.length > 0 && (
            <div className="email-section">
              <h2 style={{ textAlign: 'left', direction: 'ltr', width: '100%', display: 'block' }}>Novas Funcionalidades</h2>
              {features.map(feature => (
                <div key={feature.id} className="feature-preview">
                  {feature.featureNumber && (
                    <span style={{ 
                      display: 'inline-block', 
                      backgroundColor: '#002F6C', 
                      color: 'white', 
                      padding: '2px 8px', 
                      borderRadius: '12px', 
                      fontSize: '0.75rem', 
                      fontWeight: 'bold', 
                      marginBottom: '8px' 
                    }}>
                      {feature.featureNumber}
                    </span>
                  )}
                  <h3>{feature.title || 'Título da Feature'}</h3>
                  <p>{feature.description || 'Descrição da feature...'}</p>
                  {feature.imageUrl && (
                    <img src={feature.imageUrl} alt={feature.title} className="feature-image" />
                  )}
                  {feature.gains && (
                    <div style={{
                      background: 'rgba(34, 197, 94, 0.1)',
                      border: '1px solid #22c55e',
                      borderRadius: '6px',
                      padding: '12px',
                      marginTop: '8px',
                      fontSize: '0.9rem',
                      color: '#15803d'
                    }}>
                      <strong>Ganhos:</strong> {feature.gains}
                    </div>
                  )}
                  {feature.notes && (
                    <div className="notes">
                      <strong>📝 Observações:</strong> {feature.notes}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          
          {bugFixes.length > 0 && (
            <div className="email-section">
              <h2 style={{ textAlign: 'left', direction: 'ltr', width: '100%', display: 'block' }}>Correções de Bugs</h2>
              {bugFixes.map(bugFix => (
                <div key={bugFix.id} className="bug-preview">
                  {bugFix.tfsId && (
                    <span style={{ 
                      display: 'inline-block', 
                      backgroundColor: '#dc2626', 
                      color: 'white', 
                      padding: '2px 8px', 
                      borderRadius: '12px', 
                      fontSize: '0.75rem', 
                      fontWeight: 'bold', 
                      marginBottom: '8px' 
                    }}>
                      {bugFix.tfsId}
                    </span>
                  )}
                  <h3>{bugFix.title || 'Título do Bug'}</h3>
                  <p>{bugFix.description || 'Descrição da correção...'}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Preview em Espanhol */}
        {showSpanishTranslation && translatedContent && (
          <div className="email-preview spanish-preview" style={{ marginTop: '32px' }}>
            <div className="language-header">
              <h3 style={{ color: '#dc2626', margin: '16px 0', fontSize: '1.2rem', borderBottom: '2px solid #dc2626', paddingBottom: '8px' }}>
                Versión en Español
              </h3>
            </div>
            
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <img 
                src="/images/omnibees_logo_black.png" 
                alt="BeeDirect Logo" 
                className="logo"
                style={{ marginBottom: '24px', paddingRight: '10px' }}
              />
              
              <img 
                src="/images/image003.png" 
                alt="Release Image" 
                style={{ width: '150px', height: 'auto', objectFit: 'contain', marginBottom: '16px' }}
              />
              
              <div style={{ paddingBottom: '24px', borderBottom: '2px solid #F5F5F5' }}>
                <h2 style={{ margin: '0', color: '#002F6C', fontSize: '1.5rem' }}>
                  {translatedContent.headers.releaseTitle}
                </h2>
                <p style={{ margin: '4px 0 0 0', color: '#666', fontSize: '1rem' }}>
                  {new Date(releaseDate + 'T00:00:00').toLocaleDateString('es-ES')}
                </p>
              </div>
            </div>
            
            {features.length > 0 && (
              <div className="email-section">
                <h2 style={{ textAlign: 'left', direction: 'ltr', width: '100%', display: 'block' }}>{translatedContent.headers.newFeatures}</h2>
                {features.map(feature => (
                  <div key={`es-${feature.id}`} className="feature-preview">
                    {feature.featureNumber && (
                      <span style={{ 
                        display: 'inline-block', 
                        backgroundColor: '#002F6C', 
                        color: 'white', 
                        padding: '2px 8px', 
                        borderRadius: '12px', 
                        fontSize: '0.75rem', 
                        fontWeight: 'bold', 
                        marginBottom: '8px' 
                      }}>
                        {feature.featureNumber}
                      </span>
                    )}
                    <h3>{translatedContent.features[feature.id]?.title || feature.title || 'Título de la Funcionalidad'}</h3>
                    <p>{translatedContent.features[feature.id]?.description || feature.description || 'Descripción de la funcionalidad...'}</p>
                    {feature.imageUrl && (
                      <img src={feature.imageUrl} alt={translatedContent.features[feature.id]?.title || feature.title} className="feature-image" />
                    )}
                    {(translatedContent.features[feature.id]?.gains || feature.gains) && (
                      <div style={{
                        background: 'rgba(34, 197, 94, 0.1)',
                        border: '1px solid #22c55e',
                        borderRadius: '6px',
                        padding: '12px',
                        marginTop: '8px',
                        fontSize: '0.9rem',
                        color: '#15803d'
                      }}>
                        <strong>{translatedContent.headers.gains}:</strong> {translatedContent.features[feature.id]?.gains || feature.gains}
                      </div>
                    )}
                    {(translatedContent.features[feature.id]?.notes || feature.notes) && (
                      <div className="notes">
                        <strong>📝 {translatedContent.headers.notes}:</strong> {translatedContent.features[feature.id]?.notes || feature.notes}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            
            {bugFixes.length > 0 && (
              <div className="email-section">
                <h2 style={{ textAlign: 'left', direction: 'ltr', width: '100%', display: 'block' }}>{translatedContent.headers.bugFixes}</h2>
                {bugFixes.map(bugFix => (
                  <div key={`es-${bugFix.id}`} className="bug-preview">
                    {bugFix.tfsId && (
                      <span style={{ 
                        display: 'inline-block', 
                        backgroundColor: '#dc2626', 
                        color: 'white', 
                        padding: '2px 8px', 
                        borderRadius: '12px', 
                        fontSize: '0.75rem', 
                        fontWeight: 'bold', 
                        marginBottom: '8px' 
                      }}>
                        {bugFix.tfsId}
                      </span>
                    )}
                    <h3>{translatedContent.bugFixes[bugFix.id]?.title || bugFix.title || 'Título del Bug'}</h3>
                    <p>{translatedContent.bugFixes[bugFix.id]?.description || bugFix.description || 'Descripción de la corrección...'}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        
        <div style={{ textAlign: 'center', marginTop: '24px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={async () => await generateEmailHTML()} className="btn btn-primary">
            <Download size={16} />
            Baixar Email HTML
          </button>
          <button onClick={async () => await generateOutlookTemplate()} className="btn btn-secondary">
            <Download size={16} />
            Baixar Template Outlook (.eml)
          </button>
          <button onClick={captureEmailImage} className="btn btn-success">
            <Camera size={16} />
            Capturar Imagem
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;