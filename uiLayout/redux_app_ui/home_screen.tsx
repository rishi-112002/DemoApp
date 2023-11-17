import React, { useEffect, useState } from "react";
import {
    View, Text, StyleSheet, FlatList
} from 'react-native'
import { ActivityIndicator } from "react-native-paper";
import { RootState, store } from '..//../reduxIntegration/Store'
import { employersData } from '..//../reduxIntegration/Reducer';


type employeesData = {
    "id": string,
    "employee_name": string,
    "employee_salary": string,
    "employee_age": string,
    "profile_image": string
};



function HomePage() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<employeesData[]>([]);

    const employeeData = async () => {
        try {
            const response = await fetch('https://dummy.restapiexample.com/api/v1/employees');
            const json = await response.json();
            console.log("result" ,data.at);
            const filterData = json.data.filter((item: { id: string; employee_age: string }) => parseInt(item.id, 10) <= 10 && parseInt(item.employee_age, 5) < 50);
            setData(json.data);
            console.log("api data" , json.data);
            
            store.dispatch(employersData(json.data))
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        employeeData();
    }, []);

    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item }) => (
                        <Text style={styles.tabTextColor}>
                            {item.id} ,  {item.employee_name} , {item.employee_age}, {item.employee_salary} ,  {item.profile_image}
                        </Text>
                    )}
                />
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    tabTextColor: {
        color: 'black'
    },
})
export default HomePage;
