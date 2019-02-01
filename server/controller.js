module.exports = {

    getAll: function (req, res) {
        const db = req.app.get('db')

        db.get_houses()
            .then((houses) => res.status(200).send(houses))
            .catch((err) => res.status(500).send(err))
    },
    deleteHouse: function (req, res) {
        const db = req.app.get('db')
        const {id} =req.params

        db.delete_house(id)
            .then(() => res.status(200).send())
            .catch((err) => res.status(500).send(err))
    },
    createHouse: function (req, res) {
        const db = req.app.get('db')
        const {name, address, city, state, zip, img, mortgage, rent} = req.body

        db.create_house([name, address, city, state, zip, img, mortgage, rent])
            .then(() => res.status(200).send())
            .catch((err) => res.status(500).send(err))
    }

    




}