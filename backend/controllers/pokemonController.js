const fetch = require('node-fetch');

const pokemonController = {
    async index(req, res) {
        try {
            const response = await fetch(`${process.env.URI_POKEMON}/pokemon?offset=${req.query.offset}&limit=${req.query.limit}`)
            const data = await response.json()
            return res.status(200).send({ status: true, data: data})
        } catch (error) {
            return res.status(200).send({ status: false, message: error.message})
        }
    },
    async show(req, res) {
        try {
            const response = await fetch(`${process.env.URI_POKEMON}/pokemon/${req.params.name}`)
            const data = await response.json()
            return res.status(200).send({ status: true, data: data})
        } catch (error) {
            return res.status(200).send({ status: false, message: error.message})
        }
    },
    async store(req, res) {
        if (Math.random() >= 0.5)
        {
            return res.status(200).send({ status: true, message: 'dapat'})
        }
        else
        {
            return res.status(200).send({ status: false, message: 'tidak'})
        }
    }
}

module.exports = pokemonController