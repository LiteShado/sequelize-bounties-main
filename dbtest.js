// const models = require('./models')
// models.bounty.create({
//   name: 'Nat Richmond',
//   wantedFor: 'Winning too much',
//   reward: 100,
//   captured: 0
// })

// 1. Make a bounty with a name of Han Solo, wantedFor of Owing Money, reward of 500000, and captured of false.

// const models = require('./models')
// models.bounty.create({
//   name: 'Han Solo',
//   wantedFor: 'Owing Money',
//   reward: 500000,
//   captured: 0
// })

// 1. Make a hunter with a name of Boba Fett, a client of Jabba the Hut, and an active of true.

// const models = require('./models')
// models.hunters.create({
//   name: 'Boba Fett',
//   client: 'Jabba the Hut',
//   active: 1
// })

// 1. Make a hunter with a name of Dengar, a client of Mercurial Swift, and an active of false. Try to do this using findOrCreate (knowing that there isn't one to find, and that sequelize will create it).

// const models = require('./models')
// models.hunters.create({
//   name: 'Dengar',
//   client: 'Mercurial Swift',
//   active: 0
// })

// 1. Find all bounties, assign them to a variable, and console.log them.

// const bountiesVar = async() => {
//     const nat = await models.owner.findOne({
//       where: {
//         name: 'Nat'
//       }
//     })
//     console.log(nat);
// }
// const bountiesVar = async() => {
//     const hans = await models.owner.findOne({
//       where: {
//         name: 'Hans'
//       }
//     })
//     console.log(hans);
// }

// 1. Find all hunters with active = true, assign them to a variable, and console.log them.

// const bountiesVar = async() => {
//     const boba = await models.owner.findOne({
//       where: {
//         name: 'Boba',
            // active=1
//       }
//     })
//     console.log(bob);
// }
// const bountiesVar = async() => {
//     const dengar = await models.owner.findOne({
//       where: {
//         name: 'Dengar',
            // active=1
//       }
//     })
//     console.log(dengar);
// }

// 1. Modify Han Solo to have a captured of true.

// UPDATE bounty
// SET captured = "1"
// WHERE id = 2;

// 1. Delete Dengar. Nobody remembers this guy anyway.

// DELETE FROM hunters WHERE id=2;

// 1. Ok recreate Dengar. The deletion was just for practice. We'll actually need him later.
