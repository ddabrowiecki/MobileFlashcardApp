import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';


export default class DeckPreview extends React.Component {
    render() {
        const { deck } = this.props;
    return(
        <View>
            <Text>
                {deck.id}
            </Text>
            <Text>
                {`${deck.questions.length} cards`}
            </Text>
        </View>
    )
    }
}
