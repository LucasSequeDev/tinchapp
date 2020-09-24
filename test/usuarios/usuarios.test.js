import request from 'supertest';
import app from '../../src/index';


describe("GET@ObtenerUsuarios",() =>{
    it("Respuesta status 200", done => {
        request(app)
            .get('/api/usuario')
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done()
            })
    })

    it("Mensaje sea igual a 'Consulta realizada correctamente'", done => {
        request(app)
            .get('/api/usuario')
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .expect(res => {
                res.body.mensaje, 'Consulta realizada correctamente'
            })
            .end((err, res) => {
                if (err) return done(err);
                done()
            })
    })

    it("Cantidad de bases usuarios = 0", done => {
        request(app)
            .get('/api/usuario')
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .expect(res => {
                res.body.data.length, 96
            })
            .end((err, res) => {
                if (err) return done(err);
                done()
            })
    })
})


describe("GET@ObtenerUsuario",() =>{
    it("Respuesta status 200", done => {
        request(app)
            .get('/api/usuario/5f592f89d561e51ff4bf5b78')
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done()
            })
    })

    it("Mensaje sea igual a 'Consulta realizada correctamente'", done => {
        request(app)
            .get('/api/usuario/5f592f89d561e51ff4bf5b78')
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .expect(res => {
                res.body.mensaje, 'Consulta realizada correctamente'
            })
            .end((err, res) => {
                if (err) return done(err);
                done()
            })
    })

    it("Cantidad de usuarios = 1", done => {
        request(app)
            .get('/api/usuario/5f592f89d561e51ff4bf5b78')
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .expect(res => {
                res.body.data.length, 1
            })
            .end((err, res) => {
                if (err) return done(err);
                done()
            })
    })

    it("UserName sea el mboiola", done => {
        request(app)
            .get('/api/usuario/5f592f89d561e51ff4bf5b78')
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .expect(res => {
                res.body.UserName, "mboiola"
            })
            .end((err, res) => {
                if (err) return done(err);
                done()
            })
    })

    it("Respuesta 404", done => {
        request(app)
            .get('/api/usuario/5f592f89d561e51ff4bf5b72')
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            .end((err, res) => {
                if (err) return done(err);
                done()
            })
    })
})