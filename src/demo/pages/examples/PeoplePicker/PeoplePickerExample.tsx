import * as React from 'react';
import PeoplePicker from '../../../../components/PeoplePicker/index';
import Link from '../../../../components/Link/index';
import ExampleCard from '../../../components/ExampleCard/index';
import PropertiesTable from '../../../components/PropertiesTable/index';

export default class PeoplePickerExample extends React.Component<any, any> {
  public render() {
    return (
      <div className='PeoplePickerExample'>
        <h1 className='ms-font-xxl'>PeoplePicker</h1>
        <div><Link target='_blank' text='PeoplePickers' url='http://dev.office.com/fabric/components/peoplepicker' /> are used to pick recipients.</div>

        <PropertiesTable properties={ [] } />

        <h2 className='ms-font-xl'>Examples</h2>

        <ExampleCard title='PeoplePicker'>
          <PeoplePicker />
        </ExampleCard>
      </div>
    );
  }

}
