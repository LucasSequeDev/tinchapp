import request from 'supertest';
import app from '../../src/index';


describe("POST@login",() =>{
    it("Respuesta status 200 al loggearse", done => {
        request(app)
            .post('/api/auth/login')
            .set('Accept','application/json')
            .send({
                user: "mgrippo",
                password: "123456"
            })
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done()
            })
    })


    it("Obtener un token al loggearse", done => {
        request(app)
            .post('/api/auth/login')
            .set('Accept','application/json')
            .send({
                user: 'mgrippo',
                password: "123456"
            })
            .expect('Content-Type', /json/)
            .expect(res => {
                res.body.token
            })
            .end((err, res) => {
                if (err) return done(err);
                done()
            })
    })

    it("Respuesta 400 al no enviar el usuario", done => {
        request(app)
            .post('/api/auth/login')
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .send({
                password: "123456"
            })
            .expect(400)
            .end((err, res) => {
                if (err) return done(err);
                done()
            })
    })

    it("Respuesta 400 al no enviar el password", done => {
        request(app)
            .post('/api/auth/login')
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .send({
                user: 'mgrippo'
            })
            .expect(400)
            .end((err, res) => {
                if (err) return done(err);
                done()
            })
    })

    it("Respuesta 400 al no enviar encontrar el usuario o contraseña correcta", done => {
        request(app)
            .post('/api/auth/login')
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .send({
                user: 'mgri',
                password: "1234"
            })
            .expect(400)
            .end((err, res) => {
                if (err) return done(err);
                done()
            })
    })
})
