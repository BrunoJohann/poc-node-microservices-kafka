# POC Microsserviços mensageria - node + kafka

Projetos bem simples apenas para estudo de comunicação de microsserviços
utilizando kafka


# Rodar projetos:
    yarn install || npm i
    yarn dev     || npm run dev


# Configuração projeto typescript
    Dependencia: 
        yarn add typescript -D
        yarn add ts-node-dev -D

    Criação arquivo tsconfig.json:
        yarn tsc --init
        -- Abrir arquivo e settar strict para false

    Package.json:
        "scripts": {
            "dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"
        }

# Docker
    Comando:
        docker-compose up -d
        docker-compose down

    Containers:
        Zookeeper:
            -- Depência para o kafka

        Kafka:
            -- Kafka para mensageria entre os Microsserviços

        Kafdrop:
            -- Dashboard para o Kafka - acessar no navegador localhost:19000
