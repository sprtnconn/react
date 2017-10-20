import React from 'react'
import { Step } from 'semantic-ui-react'

const steps = [
    { title: 'Shipping', description: 'Choose your shipping options' },
    { active: true, title: 'Billing', description: 'Enter billing information' },
    { disabled: true, title: 'Confirm Order' },
]

const StepExampleGroups = () => (
    <div>
        <Step.Group>
            <Step>
                <Step.Content>
                    <Step.Title>Shipping</Step.Title>
                    <Step.Description>Choose your shipping options</Step.Description>
                </Step.Content>
            </Step>

            <Step active>
                <Step.Content title='Billing' description='Enter billing information' />
            </Step>

            <Step disabled title='Confirm Order' />
        </Step.Group>

        <br />

        <Step.Group items={steps} />
    </div>
)

export default StepExampleGroups