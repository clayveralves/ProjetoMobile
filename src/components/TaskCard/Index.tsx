import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface TaskCardProps extends TouchableOpacityProps {
    title: string;
    onPress:()=> void;
}

export function TaskCard({ title, onPress }: TaskCardProps) {
    return (
    <TouchableOpacity
        style={styles.buttonTask}
        onPress={onPress}
    >
        <Text style={styles.textTask}>
            {title}
        </Text>
    </TouchableOpacity>
    );
};