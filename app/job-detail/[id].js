import React, { useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    RefreshControl,
    ActivityIndicator,
} from "react-native";
import { COLORS, SIZES, icons } from "../../constants";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../../components/common/header/ScreenHeaderBtn";
import Company from "../../components/jobdetails/company/Company";
import Tabs from "../../components/jobdetails/tabs/Tabs";
import Specifics from "../../components/jobdetails/specifics/Specifics";
import Footer from "../../components/jobdetails/footer/Footer";

const fakedata = [
    {
        job_google_link:
            "https://www.google.com/search?gl=us&hl=en&q=iXki4pXSSRwAAAAAAAAAAA%3D%3D&cs=1&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=iXki4pXSSRwAAAAAAAAAAA%3D%3D&htidocid=iXki4pXSSRwAAAAAAAAAAA%3D%3D",
        job_highlights: {
            Qualifications: [
                "Python, React, Linux, Unix, API",
                "Strong development experience using Python, REST API Service",
                "Database development skills, experience with Object-oriented and Relational databases - SQL Server/Oracle/Sybase",
                "Experience developing software using Agile methodology",
                "Knowledge of JIRA tools and Continuous Integration capabilities",
                "Hands on experience in writing unit and UI integration test cases",
            ],
        },
        job_description:
            "Description: Python Developer in Houston Texas. W2 only. Contract. Hybrid. Skills: Python, React, Linux, Unix, API Additional Skills & Qualifications: Required Skills- • Strong development experience using Python, REST API Service • 3+ years of extensive experience working as a full stack React JS developer (familiarity with redux a plus) • Database development skills, experience with Object-oriented and Relational databases - SQL Server/Oracle/Sybase. • Experience developing software using Agile methodology. • Knowledge of JIRA tools and Continuous Integration capabilities. • Familiarity with web services, web sockets and microservice based architecture is a plus • Hands on experience in writing unit and UI integration test cases. Experience Level: Intermediate Level About TEKsystems: We're partners in transformation. We help clients activate ideas and solutions to take advantage of a new world of opportunity. We are a team of 80,000 strong, working with over 6,000 clients, including 80% of the Fortune 500, across North America, Europe and Asia. As an industry leader in Full-Stack Technology Services, Talent Services, and real-world application, we work with progressive leaders to drive change. That's the power of true partnership. TEKsystems is an Allegis Group company. The company is an equal opportunity employer and will consider all applications without regards to race, sex, age, color, religion, national origin, veteran status, disability, sexual orientation, gender identity, genetic information or any characteristic protected by law.",
        employer_name: "TEKsystems",
        employer_logo:
            "https://www.teksystems.com/-/media/teksystems/images/logos/teksystems-logo.svg",
        employer_website: "http://www.teksystems.com",
        employer_company_type: "Staffing",
        job_publisher: "TEKsystems Careers",
        job_id: "iXki4pXSSRwAAAAAAAAAAA==",
        job_employment_type: "FULLTIME",
        job_title: "Python Developer (W2)",
        job_city: "Houston",
        job_apply_link:
            "https://careers.teksystems.com/us/en/job/JP-003793389/Python-Developer-W2",
    },
];

const tabs = ["Mô tả", "Chuyên môn", "Trách nhiệm"];

const JobDetail = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState("Mô tả");
    const router = useRouter();

    const loading = false;
    const data = fakedata;
    const error = false;

    const displayToTabContent = () => {
        switch (activeTab) {
            case "Chuyên môn":
                return (
                    <Specifics
                        title="Chuyên Môn"
                        data={
                            data[0]?.job_highlights?.Qualifications ?? [
                                "Không có dữ liệu",
                            ]
                        }
                    ></Specifics>
                );
            case "Mô tả":
                return (
                    <Specifics
                        title="Mô tả"
                        data={[data[0]?.job_description] ?? ["không có mô tả"]}
                    ></Specifics>
                );
            case "Trách nhiệm":
                return (
                    <Specifics
                        title="Trách nhiệm"
                        data={[data[0]?.job_description] ?? ["không có mô tả"]}
                    ></Specifics>
                );
            default:
                return (
                    <View style={{ marginVertical: SIZES.medium }}>
                        <Text
                            style={{ color: COLORS.gray2, textAlign: "center" }}
                        >
                            Không có dữ liệu
                        </Text>
                    </View>
                );
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.lightWhite,
                    },
                    headerShadowVisible: false,
                    headerTitleAlign: "center",
                    headerTitle: "",

                    headerLeft: () => {
                        return (
                            <ScreenHeaderBtn
                                onPress={() => router.back()}
                                icon={icons.left}
                                dimension="60%"
                            />
                        );
                    },
                    headerRight: () => {
                        return (
                            <ScreenHeaderBtn
                                icon={icons.share}
                                dimension="60%"
                            />
                        );
                    },
                    animation: "slide_from_right",
                }}
            ></Stack.Screen>
            <ScrollView
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={() => {}}
                    />
                }
            >
                {loading ? (
                    <ActivityIndicator size="large" color={COLORS.primary} />
                ) : error ? (
                    <Text style={{ textAlign: "center", color: "#e11d48" }}>
                        Đã có lỗi xảy ra
                    </Text>
                ) : !data.length ? (
                    <Text style={{ color: COLORS.gray2, textAlign: "center" }}>
                        Không tìm thấy dữ liệu
                    </Text>
                ) : (
                    <View
                        style={{
                            flex: 1,
                            padding: SIZES.medium,
                            marginBottom: SIZES.xxLarge,
                        }}
                    >
                        <Company
                            companyLogo={data[0].employer_logo}
                            jobTitle={data[0].job_title}
                            companyName={data[0].employer_name}
                            location={data[0].job_city || data[0].job_country}
                        ></Company>
                        <Tabs
                            tabs={tabs}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        ></Tabs>
                        {displayToTabContent()}
                    </View>
                )}
            </ScrollView>
            <Footer
                url={
                    data[0]?.job_google_link ||
                    "https://careers.google.com/jobs/results"
                }
            ></Footer>
        </SafeAreaView>
    );
};

export default JobDetail;
