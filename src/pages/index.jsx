import React from 'react';
import Flex from '@ninetynine/react-flex';

import Avatar from '../components/avatar';
import Icon from '../components/icon';
import Clickable from '../components/clickable';

const navigate = uri => (
    window.open(uri, '_blank').focus()
);

export default () => (
    <Flex column>
        <Avatar/>
        <div className={'text-center'}>
            <h1>Dexter Marks-Barber</h1>
            <p>PHP/MySQL/React/Node</p>
        </div>
        
        <Flex row>
            <Clickable
                title={'GitHub'}
                onClick={() => (
                    navigate('https://github.com/dextermb')
                )}
            >
                <Icon
                    type={'brand'}
                    icon={'github'}
                />
            </Clickable>
            <Clickable
                title={'Twitter'}
                onClick={() => (
                    navigate('https://twitter.com/dmarksbarber')
                )}
            >
                <Icon 
                    type={'brand'}
                    icon={'twitter'}
                />
            </Clickable>
            <Clickable
                title={'Email'}
                onClick={() => (
                    navigate('mailto:dexter@marks-barber.co.uk')
                )}
            >
                <Icon icon={'at'}/>
            </Clickable>
            <Clickable
                title={'Stackoverflow CV'}
                onClick={() => (
                    navigate('https://stackoverflow.com/cv/dexter')
                )}
            >
                <Icon
                    type={'brand'}
                    icon={'stack-overflow'}
                />
            </Clickable>
        </Flex>
    </Flex>
)