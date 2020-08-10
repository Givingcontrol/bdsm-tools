import React from 'react';
import {Typography} from 'antd';

export default function Home() {
  return (
    <React.Fragment>
      <Typography>
        <Typography.Title level={2}>BDSM Tools</Typography.Title>
        <Typography.Paragraph>
          This is a site with a bunch of tools for people who enjoy BDSM.
        </Typography.Paragraph>
      </Typography>
    </React.Fragment>
  );
}