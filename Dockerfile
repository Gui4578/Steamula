# Estágio 1: Build da aplicação
# Usamos uma imagem Node.js com a versão Long-Term Support (LTS)
FROM node:20-slim as builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de gerenciamento de dependências
COPY package.json package-lock.json* ./

# Instala as dependências de produção
RUN npm install --only=production

# Copia o schema do Prisma para gerar o client
COPY prisma ./prisma/

# Gera o Prisma Client
# Isso é essencial para que seu código possa se comunicar com o banco de dados
RUN npx prisma generate

# Copia o restante do código da aplicação
COPY . .

# Roda o build da aplicação (Vite vai compilar tudo)
RUN npm run build


# Estágio 2: Imagem final de produção
# Usamos uma imagem limpa e menor para a execução
FROM node:20-slim

WORKDIR /app

# Copia as dependências de produção do estágio de build
COPY --from=builder /app/node_modules ./node_modules
# Copia a aplicação "buildada" do estágio de build
COPY --from=builder /app/dist ./dist
# Copia o package.json para que o script de start funcione
COPY package.json .

# Expõe a porta que a aplicação vai rodar (Vite preview por padrão usa a 4173)
EXPOSE 4173

# Comando para iniciar o servidor em modo de produção
# O comando 'vite preview' serve os arquivos da pasta 'dist'
CMD ["npm", "run", "preview"]

