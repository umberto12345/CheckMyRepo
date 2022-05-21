import { StyleSheet, Text, View, } from 'react-native';
import { SansText } from '../StyledText';

export default function UrlView(props: any) {
    let message = props?.message == 'error-connection' ?
        <SansText style={styles.error}>
            Check your <SansText style={{ fontWeight: 'bold' }}>internet connection</SansText>
        </SansText> :
        props?.message == 'error-user' ?
            <SansText style={styles.error}>
                Check your <SansText style={{ fontWeight: 'bold' }}>username </SansText>
                or your <SansText style={{ fontWeight: 'bold' }}>repository</SansText> name
            </SansText> :
            <SansText></SansText>
        ;
    const urlView = (props.array ?? []).map((url: string, pos: number) =>
        <SansText style={styles.url} key={pos}>
            <SansText style={{ color: 'black' }}>/</SansText>{url?.split(' ')?.join('')}
        </SansText>
    )
    return (< View  style={{width:'100%'}}>
        <SansText style={styles.title}>
            Set the repository address
        </SansText>
        <SansText style={styles.subTitle}>
            github.com
        </SansText>
        {urlView}
        {message}
    </View >)

}

const styles = StyleSheet.create({

    title: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    subTitle: {
        marginTop: 30,
        fontSize: 30,
        marginBottom: 10,

    },
    error: {
        marginTop: 10,
        fontSize: 16
    },
    url: {
        fontSize: 30,
        color: 'grey'
    }
});
