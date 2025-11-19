1. npm init -y
2. npm install -D typescript tsx @types/node
3. npx tsc --init
4. npm install express
5. npm install -D @types/express
6. npm install prisma --save-dev
7. npm install @prisma/client
8. npx prisma init
9. npm install dotenv
10. Ajuste do schema.prisma (provider = sqlite)
11. Ajuste o env - DATABASE_URL="file:./database.db"
12. prisma.config.ts -> import "dotenv/config"
13. Ajustar schema.prisma com o model User
14. Ajustar package.json com type = module
15. No tsconfig.json descomentar o rootDir e outDir
16. npx prisma generate
17. npx prisma migrate dev --name init
18. Corrigir o {data} no create do userRepository
19. Ajustar o import no user.entity - "../../generated/prisma/client.js"
20. npm run dev (comment tsconfig exclude e npx prisma generate)
21. POST com o JSON para rota /users
{"name":"Teste","email":"teste@teste.com"}
22. Adicionar remove e update no user.repository
23. Ajustar o service para usar remove/update
24. Ajustar o controller para usar o deleteUser e o updateUser
25. Ajustou o schema.prisma com a Task