'use client';

import {
  addEdge,
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from '@xyflow/react';
import { useCallback } from 'react';

import { Button } from '@/components/ui/button';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'Content Acquisition' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const ProjectViewPage = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className='h-screen w-screen'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        className='bg-white dark:bg-slate-900 text-black'
      >
        <Controls />
        <MiniMap />
        <Background variant='dots' gap={12} size={1} />
      </ReactFlow>
      <div className='absolute bottom-0  right-0 z-10 flex flex-row gap-2 p-4'>
        <Button
          onClick={() =>
            setNodes((nds) => {
              console.log('nds', nds);
              const newId = (nds.length + 1).toString();
              return [
                ...nds,
                {
                  id: newId,
                  data: { label: 'Content Acquisition' },
                  position: { x: 0, y: 200 },
                },
              ];
            })
          }
        >
          Content Acquisition
        </Button>
        <Button
          onClick={() =>
            setNodes((nds) => {
              const newId = (nds.length + 1).toString();
              return [
                ...nds,
                {
                  id: newId,
                  data: { label: ' Data Transformation' },
                  position: { x: 0, y: 250 },
                },
              ];
            })
          }
        >
          Data Transformation
        </Button>
        <Button
          onClick={() =>
            setNodes((nds) => {
              const newId = (nds.length + 1).toString();
              return [
                ...nds,
                {
                  id: newId,
                  data: { label: ' Inventory' },
                  position: { x: 0, y: 300 },
                },
              ];
            })
          }
        >
          Inventory
        </Button>
        <Button
          onClick={() =>
            setNodes((nds) => {
              const newId = (nds.length + 1).toString();
              return [
                ...nds,
                {
                  id: newId,
                  data: { label: 'QA' },
                  position: { x: 0, y: 350 },
                },
              ];
            })
          }
        >
          QA
        </Button>
      </div>
    </div>
  );
};

export default ProjectViewPage;
