# ====== STAGE 1: Build ======
FROM node:20-alpine AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia solo los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Compila el proyecto (React -> archivos estaticos)
RUN npm run build


# ====== STAGE 2: Servir con NGINX ======
FROM nginx:stable-alpine AS production

# Copiar configuracion personalizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar archivos estaticos compilados
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

# Comando por defecto ya viene configurado para NGINX
