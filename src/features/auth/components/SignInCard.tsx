import { DottedSeparator } from "@/components/DottedSeparator"
import { 
    Card,
    CardTitle,
    CardHeader,
    CardContent,
} from "@/components/ui/card"

export const SignInCard = () => {
    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">Welcome Back</CardTitle>
            </CardHeader>
            <div className="px-7"> 
                <DottedSeparator 
                    
                />
            </div>  
        </Card>
    )
}