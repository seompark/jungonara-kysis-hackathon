const Hapi = require('hapi')
const Boom = require('boom')
const handler = require('./src/handlers')
const jwtValidator = require('./src/jwt-validator')
const { io } = require('./src/socket')

const app = Hapi.server({
    host: '0.0.0.0',
    port: 8000
})

const init = async app => {
    await app.register([
        {
            plugin: require('hapi-pino'),
            options: {
                prettyPrint: true
            }
        }, 
        {
            plugin: require('hapi-auth-jwt2')
        }
    ])

    app.auth.strategy('jwt', 'jwt', {
        key: 'secret-key',
        validate: jwtValidator,
        tokenType: 'Bearer'
    })

    io.listen(app.listener)
}

const routes = app => {

    app.route([
        // 로그인
        {
            method: 'POST',
            path: '/auth',
            handler: handler.auth
        },
        // 게시글 목록 가져오기
        {
            method: 'GET',
            path: '/market/{category}',
            handler: handler.getMarket
        },
        // 게시글 작성
        {
            method: 'POST',
            path: '/market/{category}',
            handler: handler.postPost
        },
        // 게시글 정보 가져오기
        {
            method: 'GET',
            path: '/market/{category}/{postId}',
            handler: handler.getPost
        },
        // 게시글 삭제
        {
            method: 'DELETE',
            path: '/market/{category}/{postId}',
            handler: handler.deletePost
        },
        // 댓글 달기
        {
            method: 'POST',
            path: '/market/{category}/{postId}',
            handler: handler.postComment
        },
        // 댓글 삭제
        {
            method: 'DELETE',
            path: '/market/{category}/{postId}/{commentId}',
            handler: handler.deleteComment
        },
        // 학교 정보 가져오기
        {
            method: 'GET',
            path: '/school/{id}',
            handler: handler.getSchool
        },
        // 학교 생성
        {
            method: 'POST',
            path: '/school',
            handler: handler.postSchool
        }
    ])
}

const start = async app => {
    await init(app)
    routes(app)
    await app.start()
}

start(app).catch(console.error)
