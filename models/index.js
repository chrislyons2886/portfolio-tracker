const User = require('./User');
const Asset = require('./Asset');

User.hasMany(Asset, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Asset.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = { User, Asset };