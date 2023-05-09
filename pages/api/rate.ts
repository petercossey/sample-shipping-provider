import { NextApiRequest, NextApiResponse } from 'next';

export default async function rate(req: NextApiRequest, res: NextApiResponse) {
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