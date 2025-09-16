import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const MyPage = () => {
  return (
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
        <Text> Application ID</Text>
         <Text> Date of Application</Text>
          <Text> Name </Text>
           <Text> Date of Birth</Text>
            <Text> Nationality</Text>
             <Text> Travel Document Number</Text>
              <Text> E-visa validity</Text>
               <Text> Duration of stay</Text>
                <Text>  E-visa grant decision number</Text>
                <Text> Number of Entries</Text>
                 <Text>  E-visa Verification Code</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
        <Text> 65879-108795-15478</Text>
         <Text> 30.06.2025</Text>
          <Text> Md Sagar</Text>
           <Text> 05.03.1993</Text>
            <Text> Bangladesh</Text>
             <Text>  A14535615</Text>
              <Text> 16.12.2025</Text>
               <Text> 90 Days</Text>
                <Text> POLKNBX-BQHN-OIJN-YTEHGFDVCFTE</Text>
                 <Text> Multiple</Text>
                  <Text> 14YTHBVG-ETR9-LKJHT-POLMSSER</Text>

      </View>
    </Page>
  </Document>
  )
  
}

export default MyPage