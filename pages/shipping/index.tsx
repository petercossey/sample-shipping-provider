import { useRouter } from 'next/router';
import { Panel, Text, Flex, H1 } from '@bigcommerce/big-design'

const ShippingPage = () => {
    const router = useRouter();

    return (
        <>
            <Panel header="Shipping rates">
                <Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem cum ipsam voluptatum ipsum, aperiam nulla omnis suscipit ea nobis dignissimos temporibus numquam officiis? Maiores rerum facilis, corrupti nostrum iure reiciendis.
                </Text>
            </Panel>
        </>
    );
}

export default ShippingPage;