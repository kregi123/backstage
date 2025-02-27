/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Link, makeStyles, Typography, Grid } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'left',
  },
  label: {
    color: theme.palette.common.white,
    fontWeight: 'bold',
    letterSpacing: 0,
    fontSize: theme.typography.fontSize,
    marginBottom: theme.spacing(1) / 2,
    lineHeight: 1,
  },
  value: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: theme.typography.fontSize,
    lineHeight: 1,
  },
}));

type HeaderLabelContentProps = {
  value: React.ReactNode;
  className: string;
};

const HeaderLabelContent = ({ value, className }: HeaderLabelContentProps) => (
  <Typography className={className}>{value}</Typography>
);

type HeaderLabelProps = {
  label: string;
  value?: HeaderLabelContentProps['value'];
  url?: string;
};

export const HeaderLabel = ({ label, value, url }: HeaderLabelProps) => {
  const classes = useStyles();
  const content = (
    <HeaderLabelContent
      className={classes.value}
      value={value || '<Unknown>'}
    />
  );
  return (
    <Grid item>
      <span className={classes.root}>
        <Typography className={classes.label}>{label}</Typography>
        {url ? <Link href={url}>{content}</Link> : content}
      </span>
    </Grid>
  );
};
