import request from 'supertest';
import app from '../../src/index';


describe("GET@ObtenerDispositivos",() =>{
    it("Respuesta status 200", done => {
        request(app)
            .get('/api/Dispositivo')
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
            .get('/api/Dispositivo')
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
            .get('/api/Dispositivo')
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


describe("GET@ObtenerDispositivo",() =>{
    it("Respuesta status 200", done => {
        request(app)
            .get('/api/Dispositivo/5f5b92b6333a6f54d06fd082')
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
            .get('/api/basetecnica/5f5c136b73434d63b8e8cca8')
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

    it("Cantidad de dispositivos = 1", done => {
        request(app)
            .get('/api/Dispositivo/5f5b92b6333a6f54d06fd082')
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

    it("HardwareIdentifier sea el 355045090004132", done => {
        request(app)
            .get('/api/Dispositivo/5f5b92b6333a6f54d06fd082')
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .expect(res => {
                res.body.HardwareIdentifier, 355045090004132
            })
            .end((err, res) => {
                if (err) return done(err);
                done()
            })
    })

    it("Respuesta 404", done => {
        request(app)
            .get('/api/Dispositivo/5f5b92b6333a6f54d06fd083')
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            .end((err, res) => {
                if (err) return done(err);
                done()
            })
    })
})