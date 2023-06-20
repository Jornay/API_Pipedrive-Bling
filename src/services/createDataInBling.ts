const axios = require('axios');
const jsontoxml = require('jsontoxml');
const { has } = require('lodash')

const dotenv = require('dotenv');
dotenv.config()

interface Deal {
    org_id: {
        name: string;
    };
    creator_user_id: {
        email: string;
    };
    value: number;
}

const create = async (data: any) => {
    const orders = data.data.map(async (deal: Deal) => {
        const xml = jsontoxml({
            pedido: [
                {
                    name: 'cliente',
                    children: [
                        { name: 'nome', text: deal.org_id.name ? deal.org_id.name : 'Company' },
                        { name: 'tipoPessoa', text: 'J' },
                        { name: 'endereco', text: 'Av. Paulista' },
                        { name: 'ie_rg', text: '3067663210' },
                        { name: 'numero', text: '1200' },
                        { name: 'bairro', text: 'Bela Vista' },
                        { name: 'cep', text: '01310-100' },
                        { name: 'cidade', text: 'Sao Paulo' },
                        { name: 'uf', text: 'SP' },
                        { name: 'fone', text: '5481153381' },
                        { name: 'email', text: deal.creator_user_id.email || 'company@gmail.com' },
                    ],
                },
                {
                    name: 'transporte',
                    children: [
                        { name: 'transportadora', text: 'Transportadora XYZ' },
                        { name: 'tipo_frete', text: 'R' },
                        { name: 'servico_correios', text: 'SEDEX - CONTRATO' },
                        {
                            name: 'dados_etiqueta',
                            children: [
                                { name: 'nome', text: 'Endereco de entrega' },
                                { name: 'endereco', text: 'Rua Visconde de Sao Gabriel' },
                                { name: 'numero', text: '392' },
                                { name: 'complemento', text: 'Sala 59' },
                                { name: 'municipio', text: 'Bento Goncalves' },
                                { name: 'uf', text: 'RS' },
                                { name: 'cep', text: '95.700-000' },
                                { name: 'cidade', text: 'Cidade Alta' },
                            ]
                        },
                        {
                            name: 'volumes',
                            children: [
                                {
                                    name: 'volume',
                                    children: [{
                                        name: 'servico', text: 'SEDEX - CONTRATO',
                                    }],
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'itens',
                    children: [
                        {
                            name: 'item',
                            children: [
                                { name: 'codigo', text: 1 },
                                { name: 'descricao', text: 'Won deal' },
                                { name: 'un', text: 'Un' },
                                { name: 'qtde', text: 1 },
                                { name: 'vlr_unit', text: deal.value || 0 },
                            ]
                        }
                    ],
                },
                {
                    name: 'parcelas',
                    children: [{
                        name: 'parcela',
                        children: [{
                            name: 'vlr', text: deal.value || 0
                        }],
                    }],
                }
            ]
        }, false);

        try {
            const orderData = await axios.post(`https://bling.com.br/Api/v2/pedido/json/?apikey=${process.env.BLING_API_TOKEN}&xml=${xml}`);
            if (!has(orderData.data.retorno.erros, false)) {
                return false;
            }
            const pedido = has(orderData.data.retorno.pedidos[0], false)?.pedido;
            if (pedido) {
                pedido.value = deal.value;
                pedido.orgName = deal.org_id.name;
                return pedido;
            }
        } catch (error) {
            console.log("error");
        }
    });

    const CreatedOrders = await Promise.all(orders).then((res) => {
        const response = [res[res.length - 1]];
        return response;
    });

    return CreatedOrders;
};

export = { create, };