let profiles = [{
    name: 'james',
    age:32,
    height: '5-11',
    gender: 'male'
},{
    name: 'lupita',
    age:26,
    height: '5-0',
    gender: 'female'
},{
    name: 'zoey',
    age:7,
    height: '3-11',
    gender: 'female'
}]
module.exports = {
    getProfile: function (req, res) {
        res.json(profiles);
    },
    addProfile: function (req, res) {
        res.json(profiles.push(req.body));
    },
    deleteLast: function (req, res) {
        res.json(profiles.pop());
    }
}