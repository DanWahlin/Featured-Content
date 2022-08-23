import React from 'react';
import { ContentItem } from '../../shared/interfaces';
import CodeSampleIcon from '../icons/CodeSampleIcon';
import DocumentationIcon from '../icons/DocumentationIcon';
import LabIcon from '../icons/LabIcon';
import VideoIcon from '../icons/VideoIcon';
import './SearchResult.scss';

type SearchResultProps = {
    item: ContentItem;
    index: number;
    isSelected?: boolean;
    showButton?: boolean;
    onClick?: () => void;
}

const SearchResult = ({ item, index, isSelected, showButton, onClick }: SearchResultProps) => {
    return (
        <div className={`search-result ${isSelected ? 'search-result-highlight' : ''}`}
            key={index}
            onClick={onClick}>
            <div className="search-result-title">
                {item.type === 'Code Sample' &&
                    <CodeSampleIcon />
                }
                {item.type === 'Video' &&
                    <VideoIcon />
                }
                {item.type === 'Documentation' &&
                    <DocumentationIcon />
                }
                {item.type === 'Hands-On Lab' &&
                    <LabIcon />
                }
                {item.title}
            </div>
            <div className="search-result-cloud-categories">{item.cloudCategories.join(', ')}</div>
            <div className="search-result-description">{item.description}</div>
            {showButton &&
                <div className="search-result-button-container">
                    <a className="search-result-button" href={item.url} target="_blank"
                        rel="noopener noreferrer" title="View Content">View Content</a>
                </div>
            }
        </div>
    )
}

export default SearchResult;