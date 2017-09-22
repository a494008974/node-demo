const model = require('../core/model');

module.exports = {
    'GET /': async (ctx, next) => {
        ctx.render('default.html', {
            title: '首页'
        });
    },
	'GET /A': async (ctx, next) => {
        ctx.render('A.html', {
            title: '管理'
        });
    },
	'GET /B': async (ctx, next) => {
        ctx.render('B.html', {
            title: '管理'
        });
    },
	'GET /C': async (ctx, next) => {
        ctx.render('C.html', {
            title: '管理'
        });
    },
	'GET /admin': async (ctx, next) => {
        ctx.render('admin/index.html', {
            title: '后台管理'
        });
    },
	'GET /send/:user/:pwd': async (ctx, next) => {
		
		let Pet = model.Pet;
		(async () => {
			var cat = await Pet.create({
				id: 3,
				name: 'Garfield',
				gender: false,
				birth: '2007-07-07',
			});
			console.log('created: ' + JSON.stringify(cat));
			var dog = await Pet.create({
				id: 4,
				name: 'Odie',
				gender: false,
				birth: '2008-08-08',
			});
			console.log('created: ' + JSON.stringify(dog));
		})();
		
		var user = ctx.params.user;
		var pwd = ctx.params.pwd;
        ctx.render('index.html', {
            title: user+pwd
        });
    },
	'GET /send/:user': async (ctx, next) => {
		var user = ctx.params.user;
        ctx.render('index.html', {
            title: user
        });
    },
	'GET /send/*': async (ctx, next) => {
        ctx.render('index.html', {
            title: 'aaaaaaaaaaaaaaa'
        });
    },
	'GET /react': async (ctx, next) => {
        ctx.render('index.html', {
            title: 'React'
        });
    },
	'GET /pet/add': async (ctx, next) => {
		
		var dog = await model.Pet.build({
				id: 8,
				name: 'aaaaaaaaaaaa',
				gender: false,
				birth: '2008-08-08',
			});
		await dog.save();
		ctx.render('main.html', {
            title: 'aaaaaaaaaaaaaaa'
        });
    },
	'GET /pet/del': async (ctx, next) => {
		
		var pets = await model.Pet.findAll({
			 where: {
				id: 5
			}
		});
		for (let p of pets) {
			await p.destroy();
		}
		ctx.render('main.html', {
            title: 'aaaaaaaaaaaaaaa'
        });
    },
	'GET /pet/update': async (ctx, next) => {
		
		var pets = await model.Pet.findAll({
			 where: {
				id: 4
			}
		});
		
		for (let p of pets) {
			p.name = 'zhouyajun';
			p.gender = true;
			p.updatedAt = Date.now();
			p.version ++;
			await p.save();
		}
		ctx.render('main.html', {
            title: 'aaaaaaaaaaaaaaa'
        });
    },
	'GET /pet/sel': async (ctx, next) => {
				
		var pets = await model.Pet.findAll();
		
        ctx.render('pet/sel.html', {
			data: pets
        });
    },
	
};