import request from 'supertest';
import app from '../../src/index';


describe("GET@ObtenerBases",() =>{
    it("Respuesta status 200", done => {
        request(app)
            .get('/api/basetecnica')
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
            .get('/api/basetecnica')
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

    it("Cantidad de bases tecnicas = 0", done => {
        request(app)
            .get('/api/basetecnica')
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


describe("GET@ObtenerBase",() =>{
    it("Respuesta status 200", done => {
        request(app)
            .get('/api/basetecnica/5f5c136b73434d63b8e8cca8')
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

    it("Cantidad de bases tecnicas = 1", done => {
        request(app)
            .get('/api/basetecnica/5f5c136b73434d63b8e8cca8')
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

    it("SmartGroupID sea el 345", done => {
        request(app)
            .get('/api/basetecnica/5f5c136b73434d63b8e8cca8')
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .expect(res => {
                res.body.SmartGroupID, 345
            })
            .end((err, res) => {
                if (err) return done(err);
                done()
            })
    })

    it("Respuesta 404", done => {
        request(app)
            .get('/api/basetecnica/5f5c136b73434d63b8e8cca9')
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            .end((err, res) => {
                if (err) return done(err);
                done()
            })
    })
})
