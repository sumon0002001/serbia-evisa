import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const MyPage = () => {
  return (
    <Document>
        <Page  size ={'A4'}>
            <Text>
                Visa is approved.
            </Text>
        </Page>
    </Document>
  )
}

export default MyPage