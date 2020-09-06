import React from 'react';
import {ResolvedJsonFormsDispatch, withJsonFormsLayoutProps} from '@jsonforms/react';
import { Tabs, Button, Divider } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

function CategorizationRenderer(props) {
  const { schema, uischema, path } = props;
  const [key, setKey] = React.useState();
  return (
    <Tabs className="full" activeKey={key} onChange={setKey}>
      {(uischema.elements || []).map((el, i) => (
        <Tabs.TabPane tab={el.label} key={el.label}>
          <div className="scroll" style={{ height: 'calc(100vh - 359px)' }}>
            {(el.elements || []).map((child, index) => (
              <div key={`${path}-${index}`}>
                <ResolvedJsonFormsDispatch
                  uischema={child}
                  schema={schema}
                  path={path}
                />
              </div>
            ))}
          </div>
          <div>
            <Divider />
            <div className="action-buttons">
              <Button
                disabled={i < 1}
                onClick={() => setKey(uischema.elements[i - 1].label)}
              >
                <ArrowLeftOutlined />
                Previous Section
              </Button>
              <Button
                disabled={!uischema.elements[i + 1]}
                onClick={() => setKey(uischema.elements[i + 1].label)}
              >
                Next Section
                <ArrowRightOutlined />
              </Button>
            </div>
          </div>
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
}

export default withJsonFormsLayoutProps(CategorizationRenderer);
