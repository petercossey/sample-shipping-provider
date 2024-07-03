import { NextApiRequest, NextApiResponse } from 'next';

export default async function rate(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.body);
    console.log(req.body.base_options.items);
    console.log(req.body.base_options.customer);
    console.log(req.body.base_options.request_context);
    console.log(req.headers);
    try {
        // WIP - hardcoded response for the moment.
        res.status(200).json({
            quote_id: "xyzsample_shipping_provider",
            messages: [
                {
                    text: "Hello from Sample Shipping Provider",
                    type: "INFO"
                }
            ],
            carrier_quotes: [
                {
                    quotes: [
                        {
                            code: "SAMP01",
                            display_name: "Sample Express Option 1",
                            cost: {
                                currency: "USD",
                                amount: 9.99
                            }
                        },
                        {
                            code: "SAMP02",
                            display_name: "Sample Express Option 2",
                            cost: {
                                currency: "USD",
                                amount: 19.99
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