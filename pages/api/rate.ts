import { NextApiRequest, NextApiResponse } from 'next';

export default async function rate(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.body);
    console.log(req.body.base_options.items);
    console.log(req.body.base_options.customer);
    console.log(req.headers);
    try {
        // WIP - hardcoded response for the moment.
        res.status(200).json({
            quote_id: 'sample_shipping_provider',
            messages: [{
                text: 'Hello from Sample Shipping Provider',
                type: 'INFO'
            }],
            carrier_quotes: [
                {
                    quotes: [
                        {
                            code: 'SAMP',
                            display_name: 'Sample Express',
                            cost: {
                                currency: 'AUD',
                                amount: 9.99
                            }
                        }
                    ]
                }
            ]
        });
    } catch (error) {
        const { message, response } = error;
        res.status(response?.status || 500).json({ message });
    }
}