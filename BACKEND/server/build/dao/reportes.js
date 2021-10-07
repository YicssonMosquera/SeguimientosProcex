"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class Reportes {
    static cargarReporteCasosPorPerfil(ID_PERFIL) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select ";
                query += "(select count(1) from seguimientos,registro,usuario,perfil where seguimientos.ID_REGISTRO = registro.ID_REGISTRO and usuario.ID_REGISTRO = registro.ID_REGISTRO and usuario.ID_PERFIL = perfil.ID_PERFIL and perfil.ID_PERFIL = ? and seguimientos.ESTADO = 'Realizado') as Realizados, ";
                query += "(select count(1) from seguimientos,registro,usuario,perfil where seguimientos.ID_REGISTRO = registro.ID_REGISTRO and usuario.ID_REGISTRO = registro.ID_REGISTRO and usuario.ID_PERFIL = perfil.ID_PERFIL and perfil.ID_PERFIL = ? and seguimientos.ESTADO = 'Pendiente') as Pendientes, ";
                query += "(select count(1) from seguimientos S left join registro R on R.ID_REGISTRO = S.ID_REGISTRO inner join perfil P on P.ID_PERFIL = S.ID_PERFIL where S.ID_PERFIL = ? and S.ESTADO = 'En proceso') as Proceso ";
                database_1.default.query(query, [ID_PERFIL, ID_PERFIL, ID_PERFIL], function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se obtuvieron datos' });
            }
            ;
        });
    }
    static cargarReportePerfilDesarrollo(ID_REGISTRO) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select ";
                query += "(select count(1) from seguimientos,perfil where seguimientos.ID_PERFIL =  perfil.ID_PERFIL and perfil.DESCRIPCION ='Desarrollo' and seguimientos.ESTADO = 'Realizado' and seguimientos.ID_REGISTRO LIKE '%" + ID_REGISTRO + "%') as Realizados,";
                query += "(select count(1) from seguimientos,perfil where seguimientos.ID_PERFIL =  perfil.ID_PERFIL and perfil.DESCRIPCION ='Desarrollo' and seguimientos.ESTADO = 'Pendiente' and seguimientos.ID_REGISTRO LIKE '%" + ID_REGISTRO + "%') as Pendientes, ";
                query += "(select count(1) from seguimientos,perfil where seguimientos.ID_PERFIL =  perfil.ID_PERFIL and perfil.DESCRIPCION ='Desarrollo' and seguimientos.ESTADO = 'En proceso' and seguimientos.ID_REGISTRO LIKE '%" + ID_REGISTRO + "%') as Proceso, ";
                query += "(select count(1) from seguimientos,perfil where seguimientos.ID_PERFIL =  perfil.ID_PERFIL and perfil.DESCRIPCION ='Desarrollo') as Total ";
                database_1.default.query(query, function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se obtuvieron datos' });
            }
            ;
        });
    }
    static cargarReportePerfilAnalista(ID_REGISTRO) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select ";
                query += "(select count(1) from seguimientos,perfil where seguimientos.ID_PERFIL =  perfil.ID_PERFIL and perfil.DESCRIPCION ='Analista' and seguimientos.ESTADO = 'Realizado' and seguimientos.ID_REGISTRO LIKE '%" + ID_REGISTRO + "%') as Realizados,";
                query += "(select count(1) from seguimientos,perfil where seguimientos.ID_PERFIL =  perfil.ID_PERFIL and perfil.DESCRIPCION ='Analista' and seguimientos.ESTADO = 'Pendiente' and seguimientos.ID_REGISTRO LIKE '%" + ID_REGISTRO + "%') as Pendientes, ";
                query += "(select count(1) from seguimientos,perfil where seguimientos.ID_PERFIL =  perfil.ID_PERFIL and perfil.DESCRIPCION ='Analista' and seguimientos.ESTADO = 'En proceso'and seguimientos.ID_REGISTRO LIKE '%" + ID_REGISTRO + "%') as Proceso, ";
                query += "(select count(1) from seguimientos,perfil where seguimientos.ID_PERFIL =  perfil.ID_PERFIL and perfil.DESCRIPCION ='Analista') as Total ";
                database_1.default.query(query, function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se obtuvieron datos' });
            }
            ;
        });
    }
    static cargarReportePerfilSoporte(ID_REGISTRO) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select ";
                query += "(select count(1) from seguimientos,perfil where seguimientos.ID_PERFIL =  perfil.ID_PERFIL and perfil.DESCRIPCION ='Soporte' and seguimientos.ESTADO = 'Realizado' and seguimientos.ID_REGISTRO LIKE '%" + ID_REGISTRO + "%') as Realizados,";
                query += "(select count(1) from seguimientos,perfil where seguimientos.ID_PERFIL =  perfil.ID_PERFIL and perfil.DESCRIPCION ='Soporte' and seguimientos.ESTADO = 'Pendiente' and seguimientos.ID_REGISTRO LIKE '%" + ID_REGISTRO + "%') as Pendientes, ";
                query += "(select count(1) from seguimientos,perfil where seguimientos.ID_PERFIL =  perfil.ID_PERFIL and perfil.DESCRIPCION ='Soporte' and seguimientos.ESTADO = 'En proceso' and seguimientos.ID_REGISTRO LIKE '%" + ID_REGISTRO + "%') as Proceso, ";
                query += "(select count(1) from seguimientos,perfil where seguimientos.ID_PERFIL =  perfil.ID_PERFIL and perfil.DESCRIPCION ='Soporte' and seguimientos.ID_REGISTRO LIKE '%" + ID_REGISTRO + "%') as Total ";
                database_1.default.query(query, function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se obtuvieron datos' });
            }
            ;
        });
    }
    static cargarReportePerfilAdminD() {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select ";
                query += "(select count(1) from seguimientos,perfil where seguimientos.ID_PERFIL =  perfil.ID_PERFIL and perfil.DESCRIPCION ='Director de negocios' and seguimientos.ESTADO = 'Realizado') as Realizados,";
                query += "(select count(1) from seguimientos,perfil where seguimientos.ID_PERFIL =  perfil.ID_PERFIL and perfil.DESCRIPCION ='Director de negocios' and seguimientos.ESTADO = 'Pendiente') as Pendientes, ";
                query += "(select count(1) from seguimientos,perfil where seguimientos.ID_PERFIL =  perfil.ID_PERFIL and perfil.DESCRIPCION ='Director de negocios' and seguimientos.ESTADO = 'En proceso') as Proceso, ";
                query += "(select count(1) from seguimientos,perfil where seguimientos.ID_PERFIL =  perfil.ID_PERFIL and perfil.DESCRIPCION ='Director de negocios' ) as Total ";
                database_1.default.query(query, function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se obtuvieron datos' });
            }
            ;
        });
    }
    static cargarReportePerfilAdminJ() {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select ";
                query += "(select count(1) from seguimientos,perfil where seguimientos.ID_PERFIL =  perfil.ID_PERFIL and perfil.DESCRIPCION ='Directora de proyectos' and seguimientos.ESTADO = 'Realizado') as Realizados,";
                query += "(select count(1) from seguimientos,perfil where seguimientos.ID_PERFIL =  perfil.ID_PERFIL and perfil.DESCRIPCION ='Directora de proyectos' and seguimientos.ESTADO = 'Pendiente') as Pendientes, ";
                query += "(select count(1) from seguimientos,perfil where seguimientos.ID_PERFIL =  perfil.ID_PERFIL and perfil.DESCRIPCION ='Directora de proyectos' and seguimientos.ESTADO = 'En proceso') as Proceso, ";
                query += "(select count(1) from seguimientos,perfil where seguimientos.ID_PERFIL =  perfil.ID_PERFIL and perfil.DESCRIPCION ='Directora de proyectos' ) as Total ";
                database_1.default.query(query, function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se obtuvieron datos' });
            }
            ;
        });
    }
    static cargarReportePerfilcoordinadorSoporte() {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select ";
                query += "(select count(1) from seguimientos,perfil where seguimientos.ID_PERFIL =  perfil.ID_PERFIL and perfil.DESCRIPCION ='Coordinador de soporte' and seguimientos.ESTADO = 'Realizado') as Realizados,";
                query += "(select count(1) from seguimientos,perfil where seguimientos.ID_PERFIL =  perfil.ID_PERFIL and perfil.DESCRIPCION ='Coordinador de soporte' and seguimientos.ESTADO = 'Pendiente') as Pendientes, ";
                query += "(select count(1) from seguimientos,perfil where seguimientos.ID_PERFIL =  perfil.ID_PERFIL and perfil.DESCRIPCION ='Coordinador de soporte' and seguimientos.ESTADO = 'En proceso') as Proceso, ";
                query += "(select count(1) from seguimientos,perfil where seguimientos.ID_PERFIL =  perfil.ID_PERFIL and perfil.DESCRIPCION ='Coordinador de soporte' ) as Total ";
                database_1.default.query(query, function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se obtuvieron datos' });
            }
            ;
        });
    }
}
exports.default = Reportes;
