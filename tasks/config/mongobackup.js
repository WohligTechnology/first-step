module.exports = function (grunt) {

    grunt.config.set('mongobackup', {
        dump: {
            options: {
                host: 'localhost',
                db: 'PehlaKadam',
                out: './dump'
            }
        },
        restore: {
            options: {
                db: 'PehlaKadam',
                host: 'localhost',
                drop: true,
                path: './dump/PehlaKadam'
            }
        },
    });

    grunt.loadNpmTasks('mongobackup');
};