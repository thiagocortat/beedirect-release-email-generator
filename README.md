# BeeDirect Release Email Generator

Aplicação para gerar emails de release de produto para o BeeDirect da Omnibees.

## Funcionalidades

### 📋 Seções Disponíveis

1. **Novas Funcionalidades (Features)**
   - Título da feature
   - Descrição detalhada
   - URL de imagem ilustrativa (opcional)
   - Notas adicionais (impacto, rollout, métricas, etc.)
   - Possibilidade de adicionar múltiplas features

2. **Correções de Bugs (Bug Fixes)**
   - Título do bug corrigido
   - Descrição da correção
   - Possibilidade de adicionar múltiplas correções

3. **Release Notes**
   - Link para o release notes técnico completo

### 🎨 Características Visuais

- Layout moderno e executivo
- Cards arredondados agrupando os inputs
- Ícones para destacar cada seção
- Espaçamento arejado e design responsivo
- Preview em tempo real do email
- Geração de arquivo HTML para download

## Como Usar

### Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start
```

### Uso da Aplicação

1. **Adicionar Features**: Clique em "Adicionar Feature" para incluir novas funcionalidades
2. **Adicionar Bug Fixes**: Clique em "Adicionar Correção" para incluir correções de bugs
3. **Inserir Release Notes**: Adicione o link para o release notes técnico
4. **Preview**: Visualize o email em tempo real na seção de preview
5. **Download**: Clique em "Baixar Email HTML" para gerar o arquivo final

### Estrutura do Projeto

```
src/
├── App.tsx          # Componente principal da aplicação
├── index.tsx        # Ponto de entrada da aplicação
├── index.css        # Estilos globais
public/
├── index.html       # Template HTML
├── manifest.json    # Configurações da PWA
```

## Tecnologias Utilizadas

- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Lucide React** - Ícones modernos
- **CSS3** - Estilização com gradientes e animações

## Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm build` - Gera build de produção
- `npm test` - Executa os testes

## Personalização

### Logo
Para alterar o logo, substitua a URL da imagem no componente App.tsx:
```tsx
<img src="SUA_URL_DO_LOGO" alt="BeeDirect Logo" className="logo" />
```

### Cores e Estilos
Os estilos podem ser personalizados no arquivo `src/index.css`.

## Funcionalidades Futuras

- [ ] Upload de imagens local
- [ ] Templates de email personalizáveis
- [ ] Integração com APIs de email
- [ ] Histórico de releases
- [ ] Exportação em múltiplos formatos