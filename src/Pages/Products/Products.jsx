import { Box, Flex, Heading, Select, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, Divider, Checkbox, Center, Button, HStack } from '@chakra-ui/react'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import React from 'react'
import Card from './Card'
import './Products.css'
import axios from 'axios'
import SkeletonLoader from './SkeletonLoader'
import { useParams, useSearchParams } from 'react-router-dom'
import { BsCaretLeft, BsCaretRight } from "react-icons/bs"


const getCurrentPageUrl = (value) => {
    value = Number(value);
    if (typeof value === "number" && value <= 0) {
        value = 1;
    }

    if (!value) {
        value = 1;
    }

    return value;
};

function getUrl(url, sort, orderBy, filterBy) {
    if (sort && orderBy && filterBy) {
        url = `${url}&_sort=${sort}&_order=${orderBy}${filterBy}`;
    }

    else if (sort && orderBy) {
        url = `${url}&_sort=${sort}&_order=${orderBy}`;
    }

    else if (filterBy) {
        url = `${url}&category=${filterBy}`;
    }

    return url;
}


const Products = () => {

    const { gender } = useParams()
    let [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = React.useState([]);
    const [laoding, setLoading] = React.useState(false);
    const [totalCount, setTotalCount] = React.useState(0);
    const [page, setPage] = React.useState(
        getCurrentPageUrl(searchParams.get('page')) || 1
    );
    const [orderBy, setOrderBy] = React.useState("");
    const [limit, setLimit] = React.useState(8)
    const [sort, setSort] = React.useState("")
    const [filterBy, setFilterBy] = React.useState("");
    const [filterChange, setFilterChange] = React.useState({});


    const getTotalCount = () => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/${gender}`)
            .then(res => {
                setTotalCount(res.data.length)
            })
            .catch(err => console.log(err))
    }

    const getData = () => {

        setLoading(true);
        let apiUrl = getUrl(
            `${import.meta.env.VITE_BASE_URL}/${gender}?_page=${page}&_limit=${limit}`,
            sort,
            orderBy,
            filterBy
        );

        axios.get(apiUrl)
            .then(res => {
                setData(res.data)
                getTotalCount();
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }

    React.useEffect(() => {
        getData()
    }, [gender, sort, filterBy, orderBy, page, limit])

    React.useEffect(() => {
        let paramsObj = { page };
        if (orderBy) {
            paramsObj.orderBy = orderBy;
        }
        if (filterBy) {
            paramsObj["filterBy"] = filterBy;
        }
        if (sort) {
            paramsObj.sortBy = sort;
        }
        if (limit) {
            paramsObj.limit = limit;
        }

        setSearchParams(paramsObj);
    }, [page, orderBy, filterBy, sort, limit]);



    const handleSort = (e) => {
        setLoading(true);
        const val = e.target.value;

        switch (val) {
            case 'sbp-htl': {
                setSort("price")
                setOrderBy("desc")
            }
                break;

            case 'sbp-lth': {
                setSort("price")
                setOrderBy("asc")
            }
                break;

            case 'sbr-htl': {
                setSort("ratings.rating")
                setOrderBy("desc")
            }
                break;

            case 'sbr-lth': {
                setSort("ratings.rating")
                setOrderBy("asc")
            }
                break;

            default: {
                setSort("")
                setOrderBy("")
            }
        }
    }

    const handleLimit = (e) => {
        if (e.target.value == "") return;
        setLimit(e.target.value)
    }

    const handleFilterChange = (e) => {
        const n = e.target.name;
        const v = e.target.checked;
        // console.log( e.target.name, e.target.checked)
        let obj = { ...filterChange };
        obj[n] = v;

        let filterStr = "";
        for (let key in obj) {
            if (obj[key]) {
                console.log(key)
                if (key === 'cloth' || key === 'socks' || key === 'shoe' || key === 'cosmetics' || key === 'bag' || key === 'candle') {
                    filterStr+= `&type=${key}`
                } else if (key == 4 || key == 5 || key == 6 || key == 7 || key == 8 || key == 9 || key == 10) {
                    filterStr+= `&size=${key}`
                }

            }
        }
        // console.log(filterStr)
        setFilterBy(filterStr)
        setFilterChange(obj)
    }

    console.log(filterChange, filterBy);

    return (
        <>
            <Box className='Products'>
                <Box className='Main-Products'>
                    <Box className='left-part'>
                        <Accordion allowToggle>
                            <AccordionItem>
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    Type
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize='12px' />
                                                ) : (
                                                    <AddIcon fontSize='12px' />
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Checkbox size='lg' colorScheme='gray' name='cloth' onChange={handleFilterChange}>
                                                Cloth
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray' name='shoe' onChange={handleFilterChange}>
                                                Shoe
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray' name='socks' onChange={handleFilterChange}>
                                                Socks
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray' name='cosmetics' onChange={handleFilterChange}>
                                                Cosmetics
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray' name='bag' onChange={handleFilterChange}>
                                                Bag
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray' name='candle' onChange={handleFilterChange}>
                                                Candle
                                            </Checkbox>
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>

                            <AccordionItem>
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    Size
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize='12px' />
                                                ) : (
                                                    <AddIcon fontSize='12px' />
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Checkbox size='lg' colorScheme='gray' name='4' onChange={handleFilterChange}>
                                                4
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray' name='5' onChange={handleFilterChange}>
                                                5
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray' name='6' onChange={handleFilterChange}>
                                                6
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray' name='7' onChange={handleFilterChange}>
                                                7
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray' name='8' onChange={handleFilterChange}>
                                                8
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray' name='9' onChange={handleFilterChange}>
                                                9
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray' name='10' onChange={handleFilterChange}>
                                                10
                                            </Checkbox>
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>

                            <AccordionItem>
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    Feature
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize='12px' />
                                                ) : (
                                                    <AddIcon fontSize='12px' />
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>

                            <AccordionItem>
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    Fit
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize='12px' />
                                                ) : (
                                                    <AddIcon fontSize='12px' />
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>

                            <AccordionItem>
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    Material
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize='12px' />
                                                ) : (
                                                    <AddIcon fontSize='12px' />
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>

                            <AccordionItem>
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    NeckStyle
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize='12px' />
                                                ) : (
                                                    <AddIcon fontSize='12px' />
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>

                            <AccordionItem>
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    Occasion
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize='12px' />
                                                ) : (
                                                    <AddIcon fontSize='12px' />
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>

                            <AccordionItem>
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    Price
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize='12px' />
                                                ) : (
                                                    <AddIcon fontSize='12px' />
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Checkbox size='lg' colorScheme='gray' name='₹ 500 - 999'>
                                                ₹ 500 - 999
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray' name='₹ 1000 - 1499'>
                                                ₹ 1000 - 1499
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray' name='₹ 1500 - 1999'>
                                                ₹ 1500 - 1999
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray' name='₹ 2000 - 2500'>
                                                ₹ 2000 - 2500
                                            </Checkbox>
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>

                            <AccordionItem>
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    Sleeve length
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize='12px' />
                                                ) : (
                                                    <AddIcon fontSize='12px' />
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>

                            <AccordionItem>
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    Sports League
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize='12px' />
                                                ) : (
                                                    <AddIcon fontSize='12px' />
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>

                                            <Checkbox size='lg' colorScheme='gray'>
                                                Checkbox
                                            </Checkbox>
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>
                        </Accordion>
                    </Box>
                    <Box className='right-part'>
                        <Heading fontSize="2xl">Products</Heading>
                        <Divider />
                        <Flex>
                            <Text>{totalCount} Items</Text>
                            <HStack>
                                <Select variant='filled' placeholder='Choose Limit' borderRadius="none" w="" onChange={handleLimit}>
                                    <option>8</option>
                                    <option>12</option>
                                    <option>16</option>
                                    <option>20</option>
                                </Select>
                                <Select variant='filled' placeholder='Sort by Featured' borderRadius="none" w="" onChange={handleSort}>
                                    <option value="sbp-htl"> Sort by Price: high to low</option>
                                    <option value="sbp-lth"> Sort by Price: low to high</option>
                                    <option value="sbr-htl"> Sort by rating: hight to low</option>
                                    <option value="sbr-lth"> Sort by rating: low to high</option>
                                </Select>
                            </HStack>
                        </Flex>
                        <Box>
                            {laoding ? <SkeletonLoader /> : data?.map((item) => <Card key={item.id} {...item} />)}
                        </Box>
                        <Center gap="15px" my="10px" alignItems="center">
                            <Button colorScheme="red" onClick={() => setPage(page - 1)} visibility={page <= 1 ? "hidden" : "show"}><BsCaretLeft /></Button>
                            <Center borderTop="2px solid red" borderBottom="2px solid red" px="10px">{page}</Center>
                            <Button colorScheme="red" onClick={() => setPage(page + 1)} visibility={page === Math.ceil(totalCount / limit) ? "hidden" : "visible"}><BsCaretRight /></Button>
                        </Center>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Products