import React, { useState } from 'react'
import { View } from '@tarojs/components'
import {
  Button, Calendar, Cell
} from "@nutui/nutui-react-taro";
import './index.scss'

function Index() {
  const [date, setDate] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [dateWeek, setDateWeek] = useState("");


  const openSwitch = () => {
    setIsVisible(true);
  };

  const closeSwitch = () => {
    setIsVisible(false);
  };

  const setChooseValue = (param) => {
    setDate(param[3]);
    setDateWeek(param[4]);
  };

  return (
    <View className="nutui-react-demo">
      <View className="index">
        欢迎使用 NutUI React 开发 Taro 多端项目。
      </View>
      <View className="index">
        <Button type="primary" className="btn">
          NutUI React Button
        </Button>
        <Cell
            title="选择单个日期"
            desc={date ? `${date} ${dateWeek}` : "请选择"}
            onClick={openSwitch}
          />
        <Calendar
            visible={isVisible}
            defaultValue={date}
            startDate="2022-01-11"
            endDate="2029-11-30"
            onClose={closeSwitch}
            onChoose={setChooseValue}
          />
      </View>
    </View>
  )
}

export default Index
