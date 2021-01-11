import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {globalStyles} from '../../../../styles/global';
import {Formik} from 'formik';
import * as yup from 'yup';

// Untuk validasi
const ReviewSchema = yup.object({
  title: yup.string().required().min(4), // harus string,required dan min 4
  body: yup.string().required().min(8), // harus string,required dan min 8
  rating: yup
    .string() // semua yang dinput form itu string, jadi perlu parseInt
    .required()
    .test('is-num-1-5', 'Rating must be a number 1-5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }), // harus string,required dan min 4
  // test('nama test'.'feedback msg',function)
});

export default function ReviewForm({addReview}) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{title: '', body: '', rating: ''}}
        onSubmit={(val, actions) => {
          console.log(val);
          actions.resetForm(); // untk reset form
          addReview(val);
        }}
        validationSchema={ReviewSchema} // untuk validasi
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur={props.handleBlur('title')}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.title && props.errors.title}{' '}
            </Text>

            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review body"
              onChangeText={props.handleChange('body')}
              value={props.values.body}
              onBlur={props.handleBlur('body')}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.body && props.errors.body}{' '}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType="numeric"
              onBlur={props.handleBlur('rating')}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.rating && props.errors.rating}{' '}
            </Text>

            <Button
              title="submit"
              color="maroon"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({});
