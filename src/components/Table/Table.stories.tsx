import { Badge } from 'components/Badge'
import { Table } from '.'

export default {
  title: 'components/Table',
}

export const Default = () => {
  return (
    <Table
      columns={[
        {
          name: 'name',
          width: '35%',
          render: ({ name, avatar, email }) => (
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img alt="" className="h-10 w-10 rounded-full" src={avatar} />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">{name}</div>
                <div className="text-sm text-gray-500">{email}</div>
              </div>
            </div>
          ),
        },
        {
          name: 'Title',
          width: '30%',
          render: ({ department, title }) => (
            <>
              <div className="text-sm text-gray-900">{title}</div>
              <div className="text-sm text-gray-500">{department}</div>
            </>
          ),
        },
        {
          name: 'Status',
          width: '12%',
          render: ({ status }) => <Badge>{status}</Badge>,
        },
        {
          name: 'Role',
          width: '13%',
          render: ({ role }) => (
            <span className="whitespace-nowrap text-sm text-gray-500">
              {role}
            </span>
          ),
        },
        {
          name: '',
          width: '10%',
          className: 'text-right',
          render: () => (
            <a
              className="text-pink-600 hover:text-pink-900 text-sm font-medium"
              href="/"
            >
              Edit
            </a>
          ),
        },
      ]}
      data={[
        {
          name: 'Jane Cooper',
          avatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
          email: 'jane.cooper@example.com',
          title: 'Regional Paradigm Technician',
          department: 'Optimization',
          status: 'active',
          role: 'Admin',
        },
        {
          name: 'Cody Fisher',
          avatar:
            'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
          email: 'cody.fisher@example.com',
          title: 'Product Directive Officer',
          department: 'Intranet',
          status: 'active',
          role: 'Owner',
        },
        {
          name: 'Esther Howard',
          avatar:
            'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
          email: 'esther.howard@example.com',
          title: 'Forward Response Developer',
          department: 'Directives',
          status: 'active',
          role: 'Member',
        },
        {
          name: 'Jenny Wilson',
          avatar:
            'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
          email: 'jenny.wilson@example.com',
          title: 'Central Security Manager',
          department: 'Program',
          status: 'active',
          role: 'Member',
        },
        {
          name: 'Kristin Watson',
          avatar:
            'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
          email: 'kristin.watson@example.com',
          title: 'Lead Implementation Liaison',
          department: 'Mobility',
          status: 'active',
          role: 'Admin',
        },
        {
          name: 'Cameron Williamson',
          avatar:
            'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
          email: 'cameron.williamson@example.com',
          title: 'Internal Application Engineer',
          department: 'Security',
          status: 'active',
          role: 'Member',
        },
      ]}
    />
  )
}

Default.story = {
  name: 'default',
}
