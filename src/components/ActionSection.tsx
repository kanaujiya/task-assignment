import React from 'react';
import { ActionSectionProps } from '@/types'

const ActionSection = ({ setDisabled, disabled }: ActionSectionProps) => {
    return (
        <div className="w-1/4 p-4 bg-gray-100 border-l">
            <h3 className="text-lg font-bold mb-4">Action</h3>
            <button
                onClick={() => setDisabled(!disabled)}
                className="px-4 py-2 bg-black text-white rounded shadow"
            >
                Edit
            </button>
        </div>
    )
}

export default ActionSection