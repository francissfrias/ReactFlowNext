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

const ProjectNodes = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className='h-screen w-screen'>
      <div className="flex p-4 h-full w-full">
        <div className="p-4  w-1/5 rounded-xl justify-items-center ">
          <div className="grid grid-rows-5 gap-4 w-full">
            <div className="row-start-1 justify-center w-full text-center"><h1 className='font-bold'>Services</h1></div>
            <div className="row-start-2 justify-center w-full">
              <Button
                className='bg-white text-black cursor-pointer hover:bg-slate-100 w-full'
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
            </div>
            <div className="row-start-3 justify-center w-full">
              <Button
                className='bg-white text-black cursor-pointer hover:bg-slate-100 w-full'
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
            </div>
            <div className="row-start-4 justify-center w-full">
              <Button
                className='bg-white text-black cursor-pointer hover:bg-slate-100 w-full'
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
            </div>
            <div className="row-start-5 justify-center w-full">
              <Button
                className='bg-white text-black cursor-pointer hover:bg-slate-100 w-full'
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

        </div>
        <div className="p-4 w-15/23 rounded-xl border-1 border-white h-full">
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
            <Background gap={12} size={1} />
            <div className='fixed bottom-0 ml-20 mt-auto z-10 flex flex-row gap-2 p-4'>
              <Button
                className='bg-white text-black cursor-pointer hover:bg-slate-100 '
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
                className='bg-white text-black cursor-pointer hover:bg-slate-100 '
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
                className='bg-white text-black cursor-pointer hover:bg-slate-100 '
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
                className='bg-white text-black cursor-pointer hover:bg-slate-100 '
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
          </ReactFlow>
        </div>
      </div>

    </div>
  );
};

export default ProjectNodes;
