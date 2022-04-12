import { Bar, FilterBar, FilterGroupItem, Input, Option, Select, Title } from '@ui5/webcomponents-react';
import Questions from './Components/Questions';

export default function FlashcardApp() {

    const handleSearchFieldChange = () => {
        alert('Search Field Triggered');
    };

    return (
        <>
            <Bar design="Header">
                <Title>Flashcard Application</Title>
            </Bar>
            <FilterBar
                onGo={(e) => alert("Filter Applied")}
                search={<Input placeholder="Search" name="searchField" onChange={() => handleSearchFieldChange()}></Input>}
            >
                <FilterGroupItem label="Topic">
                    <Select>
                        <Option>General Knowledge</Option>
                        <Option selected>Monty Python</Option>
                    </Select>
                </FilterGroupItem>
            </FilterBar>
            <Questions />
        </>
    );
};
