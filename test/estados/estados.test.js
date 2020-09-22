import request from 'supertest';
import app from '../../src/index';


describe("GET@ObtenerEstados",() =>{
    it("Respuesta status 200", done => {
        request(app)
            .get('/api/estado')
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
            .get('/api/estado')
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
            .get('/api/estado')
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


describe("GET@ObtenerEstado",() =>{
    it("Respuesta status 200", done => {
        request(app)
            .get('/api/estado/5f595cc1a0b6e73de4eb458a')
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
            .get('/api/estado/5f595cc1a0b6e73de4eb458a')
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

    it("Cantidad de Estados = 1", done => {
        request(app)
            .get('/api/estado/5f595cc1a0b6e73de4eb458a')
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

    it("Estado sea el PRESTADO", done => {
        request(app)
            .get('/api/estado/5f595cc1a0b6e73de4eb458a')
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .expect(res => {
                res.body.Estado, "PRESTADO"
            })
            .end((err, res) => {
                if (err) return done(err);
                done()
            })
    })

    it("Respuesta 404", done => {
        request(app)
            .get('/api/estado/5f595cc1a0b6e73de4eb458e')
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            .end((err, res) => {
                if (err) return done(err);
                done()
            })
    })
})