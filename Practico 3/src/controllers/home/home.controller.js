
// controladores
const home = async (req, res) => {
    res.render('index', { 
        title: ' Clínica Salud+',
        message: ' Servidor Clínica Salud+' ,
        showFeatures: true,
        features: [
            { name: 'Turnos', url: 'http://localhost:3000/turnos' },
            { name: 'Nuevo Turno', url: 'http://localhost:3000/turnos/nuevo' },
            { name: 'Eliminar Pacientes', url: 'http://localhost:3000/paciente/eliminar' }
            
        ]
    });
}
module.exports = {
   home
}



