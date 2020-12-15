import { WwTableComponent } from './ww-table.component';
import { WwTableModule } from './ww-table.module';
import { moduleMetadata } from '@storybook/angular';


export default {
  title: 'Components/Table',
  component: WwTableComponent,
  decorators: [
    moduleMetadata({
      imports: [WwTableModule],
    }),
  ],
};

export const primary = () => ({
  component: WwTableComponent,
});
