import React, {Component} from 'react';
import { Button, DatePicker, ConfigProvider, Input, Space } from 'antd';
import { WechatOutlined } from '@ant-design/icons'

const { RangePicker } = DatePicker;

class App extends Component {

  onChange(date, dateString) {
    console.log(date, dateString);
  }

  render() {
    return (
      <div>
        <ConfigProvider
          theme={{
            token: {
              // Seed Token，影响范围大
              colorPrimary: '#00b96b',
              borderRadius: 2,

              // 派生变量，影响范围小
              colorBgContainer: '#f6ffed',
            },
          }}
        >
        <Button type="primary" icon={<WechatOutlined />}>按钮1</Button>
        <Button type="primary" danger icon={<WechatOutlined />}>按钮4</Button>
        <Button>按钮2</Button>
        <Button type="link">按钮3</Button>
        <WechatOutlined style={{fontSize: '20px', color: '#eb2f96'}}/>
        <DatePicker onChange={this.onChange} />
        <RangePicker showTime />
        <Space>
          <Input placeholder="Please Input" />
          <Button type="primary">Submit</Button>
        </Space>
        </ConfigProvider>
      </div>
    );
  }
}

export default App;