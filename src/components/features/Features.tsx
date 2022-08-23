import React from 'react';
import { Feature } from '../../shared/interfaces';
import CodeSampleIcon from '../icons/CodeSampleIcon';
import DocumentationIcon from '../icons/DocumentationIcon';
import LabIcon from '../icons/LabIcon';
import VideoIcon from '../icons/VideoIcon';
import './Features.scss';

const Features = ({ data }: { data: Feature[] }) => {
    return (
        <section className="features">
            {data.map((feature, index) => (
                <div className={`feature feature-${index + 1}`} key={index}>
                    <a href={feature.url} target="_blank" rel="noopener noreferrer">
                        <div className="feature-header">
                            <img src={feature.imageUrl} alt={feature.title} />
                        </div>
                        <div className="feature-footer">
                                {feature.type === 'Code Sample' &&
                                    <CodeSampleIcon />
                                }
                                {feature.type === 'Video' &&
                                    <VideoIcon />
                                }
                                {feature.type === 'Documentation' &&
                                    <DocumentationIcon />
                                }
                                {feature.type === 'Hands-On Lab' &&
                                    <LabIcon />
                                }
                            <span className="feature-title">{feature.title}</span>
                            <p>{feature.description}</p>
                        </div>
                    </a>
                </div>
            ))}
        </section>
    )
}

export default Features;