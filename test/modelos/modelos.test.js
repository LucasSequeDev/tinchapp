import request from 'supertest';
import app from '../../src/index';


describe("GET@ObtenerModelos",() =>{
    it("Respuesta status 200", done => {
        request(app)
            .get('/api/modelo')
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
            .get('/api/modelo')
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

    it("Cantidad de bases Dispositivos = 0", done => {
        request(app)
            .get('/api/modelo')
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


describe("GET@ObtenerModelo",() =>{
    it("Respuesta status 200", done => {
        request(app)
            .get('/api/modelo/5f5b9276333a6f54d06fd07e')
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
            .get('/api/modelo/5f5b9276333a6f54d06fd07e')
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

    it("Cantidad de modelos = 1", done => {
        request(app)
            .get('/api/modelo/5f5b9276333a6f54d06fd07e')
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

    it("Modelo sea el SM-A605GN", done => {
        request(app)
            .get('/api/modelo/5f5b9276333a6f54d06fd07e')
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .expect(res => {
                res.body.HardwareIdentifier, "SM-A605GN"
            })
            .end((err, res) => {
                if (err) return done(err);
                done()
            })
    })

    it("Respuesta 404", done => {
        request(app)
            .get('/api/modelo/5f5b9276333a6f54d06fd07a')
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            .end((err, res) => {
                if (err) return done(err);
                done()
            })
    })
})